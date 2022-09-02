import React, { FC, useState } from "react"

// antd
import { Button, Avatar, Card } from "antd"

// components
import ModalAction from "components/modal"

// icons
import { DeleteOutlined } from "@ant-design/icons"
import { useAppDispatch } from "hooks/useAppDispatch"

// models
import { ILink } from "models/link"

interface RemoveLinkProps {
    link: ILink
}

const { Meta } = Card

const RemoveLink: FC<RemoveLinkProps> = ({ link }) => {
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [visible, setVisible] = useState(false)

    const { removeLinkAsync } = useAppDispatch()

    const showModal = () => {
        setVisible(true)
    }

    const handleCancel = () => {
        setVisible(false)
    }

    const handleOk = () => {
        setConfirmLoading(true)
        setTimeout(() => {
            setVisible(false)
            setConfirmLoading(false)
            removeLinkAsync(link.id)
        }, 1000)
    }
    return (
        <>
            <Button type="primary" onClick={() => showModal()} danger ghost>
                <DeleteOutlined />
            </Button>
            <ModalAction
                title="Удаление адреса пользователя"
                visible={visible}
                handleOk={handleOk}
                handleCancel={handleCancel}
                confirmLoading={confirmLoading}
            >
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={link.link}
                />
            </ModalAction>
        </>
    )
}

export default RemoveLink
