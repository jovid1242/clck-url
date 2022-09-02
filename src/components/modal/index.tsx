import React, { FC } from "react"

// antd
import { Modal } from "antd"

// models
import { IModal } from "models/modal"

const ModalAction: FC<IModal> = ({
    title,
    handleCancel,
    visible,
    handleOk,
    confirmLoading,
    children,
    footer,
}) => {
    return (
        <>
            <Modal
                title={title}
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={footer}
            >
                {children}
            </Modal>
        </>
    )
}

export default ModalAction
