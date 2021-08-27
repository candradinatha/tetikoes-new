import React from "react"
import { Redirect } from "react-router-dom"


// Profile
import UserProfile from "../pages/Authentication/user-profile"



// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import Home from "../pages/index"

const userRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path : '/profile' , component : UserProfile},
  // { path : '/' , component : Home},

  // this route should be at the end of all other routes
  // { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { userRoutes, authRoutes }
