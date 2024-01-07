/* eslint-disable no-unused-vars */
import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import LogIn from "../Pages/Submission/LogIn/LogIn";
import Register from "../Pages/Submission/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
// import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AddClass from "../Pages/Dashboard/UserHome/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import MySelectedClass from "../Pages/Dashboard/MySelectedClass/MySelectedClass";
import AdminRoute from './AdminRoute'
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <LogIn></LogIn>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        },
        {
          path: 'classes',
          element: <Classes></Classes>
        }
      ]
    },
    {
          path: 'dashboard',
          element: <Dashboard></Dashboard>,
          children: [
            {
              path: 'userhome',
              element: <UserHome></UserHome>
            },
            {
              path: 'addclass',
              element: <AddClass></AddClass>
            },
            {
              path: 'myclasses',
              element: <MyClasses></MyClasses>
            },
            {
              path: 'selectedclass',
              element: <MySelectedClass></MySelectedClass>
            },
            {
              path: 'manageclasses',
              element: <ManageClasses></ManageClasses>
            },
            {
              path: 'manageusers',
              element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
            }
          ]
    }
  ]
  );