import React, { FC } from "react"

// antd
import { Space, Table, Typography } from "antd"

// components
import RemoveContact from "./RemoveLink"

// models
import { ILink } from "models/link"
import type { ColumnsType } from "antd/es/table"

// api
import { API } from "api"

interface DataType {
    id: string
    link: string
    counter: number
    short: string
}

interface TableLinksProps {
    data: ILink[]
}

const TableLinks: FC<TableLinksProps> = ({ data }) => {
    const columns: ColumnsType<DataType> = [
        {
            width: "40%",
            title: "исходная ссылка",
            dataIndex: "link",
            key: "link",
            render: (text) => (
                <Typography.Text className="text-yellow" ellipsis={true}>
                    {text}
                </Typography.Text>
            ),
            sorter: (a, b) => a.link.length - b.link.length,
        },
        {
            width: "20%",
            title: "количество переходов",
            dataIndex: "number",
            key: "number",
            render: (text) => (
                <Typography.Text className="text-yellow" ellipsis={true}>
                    {text}
                </Typography.Text>
            ),
            sorter: (a, b) => a.counter - b.counter,
        },
        {
            width: "20%",
            title: "короткая ссылка",
            dataIndex: "short",
            key: "short",
            render: (short) => (
                <Typography.Text className="text-yellow" ellipsis={true}>
                    <a href={`${API}/s/${short}`} target="_blank">
                        {short}
                    </a>
                </Typography.Text>
            ),
        },
        {
            width: "20%",
            title: "Действия",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <RemoveContact link={record} />
                </Space>
            ),
        },
    ]

    return (
        <>
            <Table
                columns={columns}
                pagination={{
                    position: ["bottomRight"],
                }}
                dataSource={data}
            />
        </>
    )
}

export default TableLinks
