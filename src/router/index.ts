import React from "react"

// components
import Login from "pages/Login"
import Register from "pages/Register"
import Shrink from "pages/Shrink"

// type rout
export interface IRoute {
    path: string
    element: React.ComponentType
    exact?: boolean
}

export enum RouteName {
    LOGIN = "/login",
    REGISTER = "REGISTER",
    SHRINK = "/shrink",
}

export const publicRoutes: IRoute[] = [
    {
        path: RouteName.LOGIN,
        exact: true,
        element: Login,
    },
    {
        path: RouteName.REGISTER,
        exact: true,
        element: Register,
    },
]

export const privateRoutes: IRoute[] = [
    {
        path: RouteName.SHRINK,
        exact: true,
        element: Shrink,
    },
]
