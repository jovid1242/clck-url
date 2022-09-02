import React, { FC } from "react"
import { useLocation, useNavigate } from "react-router-dom"

// antd
import { Button, Col, Layout, Row, Space } from "antd"

// hooks
import { useTypedSelector } from "hooks/useTypedSelector"
import { useAppDispatch } from "hooks/useAppDispatch"

// styles
import "styles/header.scss"

const Navbar: FC = () => {
    const { logout } = useAppDispatch()
    const { isAuth } = useTypedSelector((state) => state.auth)
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className="header">
            <Layout.Header>
                <Row>
                    <Col span={22}>
                        <div className="logo">
                            <span className="text-yellow">Logo</span>
                        </div>
                    </Col>
                    <Col span={2}>
                        {isAuth ? (
                            <Space>
                                <div className="text-yellow">
                                    {/* {user.username} */}
                                </div>
                                <Button
                                    type="primary"
                                    onClick={() => logout()}
                                    className="btn"
                                    ghost
                                >
                                    Выйти
                                </Button>
                            </Space>
                        ) : (
                            <>
                                <Button
                                    type="primary"
                                    className="btn"
                                    onClick={() =>
                                        navigate(
                                            location.pathname === "/login"
                                                ? "/register"
                                                : "/login"
                                        )
                                    }
                                    ghost
                                >
                                    {location.pathname === "/login"
                                        ? "Регистрация"
                                        : "Вход"}
                                </Button>
                            </>
                        )}
                    </Col>
                </Row>
            </Layout.Header>
        </div>
    )
}

export default Navbar
