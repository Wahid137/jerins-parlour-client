import DashboardLayout from "../../Layout/DashboardLayout";
import Book from "../../Pages/Dashboard/Book/Book";
import BookingList from "../../Pages/Dashboard/BookingList/BookingList";
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
                element: <PrivateRoute><Book></Book></PrivateRoute>,
                loader: ({ params }) => fetch(`https://jerins-parlour-server-sepia.vercel.app/services/${params.id}`)
            }
        ]
    }
])
export default router;