export interface IModal {
    title: string
    visible: boolean
    handleCancel?: () => void | null
    handleOk?: () => void | null
    confirmLoading?: boolean
    children?: React.ReactNode
    footer?: null
}
