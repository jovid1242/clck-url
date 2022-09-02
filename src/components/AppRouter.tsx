import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"

// router
import { privateRoutes, publicRoutes, RouteName } from "router"

// hooks
import { useTypedSelector } from "hooks/useTypedSelector"

const AppRouter = () => {
    const { isAuth } = useTypedSelector((state) => state.auth)

    const getPublicRoutes = () => {
        return (
            <>
                {publicRoutes.map((route) => {
                    return (
                        <Route
                            path={route.path}
                            element={<route.element />}
                            key={route.path}
                        />
                    )
                })}
                <Route path="*" element={<Navigate to={RouteName.LOGIN} />} />
            </>
        )
    }

    const getPrivateRoutes = () => {
        return (
            <>
                {privateRoutes.map((route) => {
                    return (
                        <Route
                            path={route.path}
                            element={<route.element />}
                            key={route.path}
                        />
                    )
                })}
                <Route path="*" element={<Navigate to={RouteName.SHRINK} />} />
            </>
        )
    }

    return <Routes>{isAuth ? getPrivateRoutes() : getPublicRoutes()}</Routes>
}
export default AppRouter
