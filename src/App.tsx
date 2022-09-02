import React, { useMemo } from "react"

// antd
import { Layout } from "antd"

// components
import AppRouter from "components/AppRouter"
import Navbar from "components/navbar"

// hooks
import { useAppDispatch } from "hooks/useAppDispatch"

// models
import { IUser } from "models/auth"

// styles
import "./App.css"
import { useNavigate } from "react-router-dom"

function App() {
    const { setUser, setIsAuth } = useAppDispatch()
    const navigate = useNavigate()

    const checkAuth = () => {
        if (localStorage.getItem("token")) {
            setUser({
                username: localStorage.getItem("username" || ""),
            } as IUser)
            setIsAuth(true)
        } else {
            navigate("/login")
        }
    }

    useMemo(() => {
        checkAuth()
    }, [])

    return (
        <Layout>
            <Navbar />
            <Layout.Content>
                <AppRouter />
            </Layout.Content>
        </Layout>
    )
}

export default App
