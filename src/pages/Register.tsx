import React, { FC } from "react"

// antd
import { Card, Layout, Row } from "antd"

// components
import RegisterForm from "components/auth/RegisterForm"

const Register: FC = () => {
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <Card>
                    <RegisterForm />
                </Card>
            </Row>
        </Layout>
    )
}

export default Register
