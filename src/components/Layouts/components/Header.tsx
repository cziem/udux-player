import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Layout, theme } from "antd"
import React from "react"

const { Header: AntHeader } = Layout

export const Header = () => {
  const [collapsed, setCollapsed] = React.useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <AntHeader style={{ padding: 0, background: colorBgContainer }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: () => setCollapsed(!collapsed),
      })}
    </AntHeader>
  )
}
