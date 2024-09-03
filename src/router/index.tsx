import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "@/components/ErrorPage";
import Login from "@/pages/Login";
import App from "../App";
import {
    DashboardOutlined,
} from "@ant-design/icons";

const Home = lazy(() => import("@/pages/Home"))

const routes = [
    {
        path: "/",
        element: <Navigate to={"/home"} />,
    },
    {
        path: '/',
        element: < App />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: "home",
                        title: "首页",
                        icon: <DashboardOutlined />,
                        element: <Home />
                    },
                    {
                        path: "*",
                        element: <Navigate to="/" replace={true} />,
                    },
                ]
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
]

export { routes }

export default createBrowserRouter(routes)