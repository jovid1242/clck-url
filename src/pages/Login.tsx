import React, { FC } from "react"

// antd
import { Card, Layout, Row } from "antd"

// components
import LoginForm from "components/auth/LoginForm"

const Login: FC = () => {
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <Card>
                    <LoginForm />
                </Card>
            </Row>
        </Layout>
    )
}

export default Login
