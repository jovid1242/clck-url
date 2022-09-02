import React, { FC, useEffect, useState } from "react"

// antd
import { Form, Input } from "antd"

// icons
import { LinkOutlined } from "@ant-design/icons"
import { useAppDispatch } from "hooks/useAppDispatch"

const SearchContact: FC = () => {
    const { setIsSearch } = useAppDispatch()
    const [search, setSearch] = useState("")

    useEffect(() => {
        setIsSearch(search)
    }, [search])

    return (
        <Form name="horizontal_login" layout="inline">
            <Form.Item name="name">
                <Input
                    prefix={<LinkOutlined className="user-icon" />}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Username"
                />
            </Form.Item>
        </Form>
    )
}

export default SearchContact
