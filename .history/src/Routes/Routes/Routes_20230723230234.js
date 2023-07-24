import DashboardLayout from "../../Layout/DashboardLayout";
import AddService from "../../Pages/Dashboard/AddService/AddService";
import Book from "../../Pages/Dashboard/Book/Book";
import BookingList from "../../Pages/Dashboard/BookingList/BookingList";
import MakeAdmin from "../../Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageService from "../../Pages/Dashboard/MangeService/ManageService";
import OrderList from "../../Pages/Dashboard/OrderList/OrderList";
import Review from "../../Pages/Dashboard/Review/Review";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import AdminRoute from "./PrivateRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <BookingList></BookingList>
            },
            {
                path: '/dashboard/book/:id',
                element: <Book></Book>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/dashboard/review',
                element: <Review></Review>
            },
            {
                path: '/dashboard',
                element: <AdminRoute><OrderList></OrderList></AdminRoute>
            },
            {
                path: '/dashboard/addservice',
                element: <AdminRoute><AddService></AddService></AdminRoute>
            },
            {
                path: '/dashboard/makeadmin',
                element: <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>
            },
            {
                path: '/dashboard/manageservice',
                element: <AdminRoute><ManageService></ManageService></AdminRoute>
            },
        ]
    }
])
export default router;