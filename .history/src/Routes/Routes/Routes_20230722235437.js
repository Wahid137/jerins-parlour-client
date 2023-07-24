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
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                path: '/dashboard/orderlist',
                element: <OrderList></OrderList>
            },
            {
                path: '/dashboard/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/dashboard/makeadmin',
                element: <MakeAdmin></MakeAdmin>
            },
            {
                path: '/dashboard/manageservice',
                element: <ManageService></ManageService>
            },
        ]
    }
])
export default router;