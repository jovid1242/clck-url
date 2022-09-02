import React, { useState } from "react"

// antd
import { Button, Form, Input } from "antd"

// hooks
import { useAppDispatch } from "hooks/useAppDispatch"

// utils
import { rules } from "utils/rules"

interface InputValue {
    name: string
    link: string
}

const AddLink = () => {
    const [confirmLoading, setConfirmLoading] = useState(false)
    const { addLinkAsync } = useAppDispatch()

    const submitForm = (value: InputValue) => {
        setConfirmLoading(true)
        setTimeout(() => {
            addLinkAsync(new Date().getSeconds() + "", value.link)
            setConfirmLoading(false)
        }, 1000)
    }

    return (
        <Form name="basic" onFinish={submitForm} autoComplete="off">
            <Form.Item
                name="link"
                rules={[
                    rules.required("Пожалуйста, напишитие или вставте ссылку"),
                ]}
            >
                <Input placeholder="Пример: example.com/product/343533553" />
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="btn"
                    loading={confirmLoading}
                    ghost
                >
                    Сократить
                </Button>
            </Form.Item>
        </Form>
    )
}

export default AddLink
