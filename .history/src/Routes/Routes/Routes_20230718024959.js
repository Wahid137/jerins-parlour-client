import DashboardLayout from "../../Layout/DashboardLayout";
import Book from "../../Pages/Customer/Book/Book";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

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
        path: '/dashboard/book',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/book/:id',
                element: <Book></Book>
                loader: 
            }
        ]
    }
])
export default router;