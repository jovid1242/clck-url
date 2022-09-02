import React, { FC, useMemo } from "react"

// antd
import { Button, Card, Col, Layout, Row, Space, Typography } from "antd"

// components
import TableLinks from "components/shrink/TableLinks"
import AddLink from "components/shrink/AddLink"

// styles
import "styles/shrink/shrink.scss"
import SearchContact from "components/shrink/SearchContact"

// hooks
import { useTypedSelector } from "hooks/useTypedSelector"
import { useAppDispatch } from "hooks/useAppDispatch"

const { Title } = Typography

const Shrink: FC = () => {
    const { links, search } = useTypedSelector((state) => state.links)
    const { getLink } = useAppDispatch()

    const filteredLinks = () => {
        return links.filter((el) => {
            if (el?.link?.toLowerCase().includes(search.toLowerCase())) {
                return true
            }
            return false
        })
    }

    useMemo(() => {
        getLink()
    }, [])

    return (
        <Layout>
            <div className="shrink mh100">
                <div className="shrink__wrapper">
                    <Row>
                        <Col span={6}>
                            <Card className="left-bar">
                                <Title level={4} className="text-yellow mb4">
                                    Сократить Ссылку
                                </Title>
                                <AddLink />
                            </Card>
                        </Col>
                        <Col span={18}>
                            <Card className="right-bar">
                                <div className="mb4">
                                    <SearchContact />
                                </div>
                                <TableLinks data={filteredLinks()} />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </Layout>
    )
}

export default Shrink
