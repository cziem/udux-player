import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons"
import { Image, Menu, Typography, Avatar } from "antd"
import React, { useState } from "react"
import { StyledSider } from "./styles"
import ProfileImage from "../../../assets/images/profile-image.png"

const { Text } = Typography

export const Drawer: React.FC = () => {
  const [collapsed] = useState(false)

  return (
    <StyledSider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width="295"
      style={{
        background: "#000",
      }}
    >
      <div className="profile-wrapper">
        <div className="avatar">
          <Image preview={false} src={ProfileImage} style={{ width: 45 }} />
        </div>
        <Text strong>Hey! Aleem</Text>
      </div>

      <div className="player-menu">
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </div>
    </StyledSider>
  )
}
