import { Divider, Image, Space, Typography } from "antd"
import { SearchIcon } from "components/Icons"
import React, { useState } from "react"
import { truncate } from "utils"
import ProfileImage from "../../../assets/images/profile-image.png"
import { drawerRoutes } from "./sider-data"
import { StyledSider } from "./styles"

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
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="profile-wrapper">
        <div className="avatar">
          <Image preview={false} src={ProfileImage} style={{ width: 45 }} />
        </div>
        <Text strong>Hey! Aleem</Text>
      </div>

      <div className="player-menu">
        <ul className="player-nav">
          {drawerRoutes.map(dr => {
            return (
              <React.Fragment>
                {dr.children.map((navItem, idx) => {
                  if (!navItem.items.length) {
                    return (
                      <li className="nav-item" key={`${idx}-${navItem.label}`}>
                        <Space>
                          {<navItem.icon />}
                          <Text>{navItem.label}</Text>
                        </Space>

                        {dr.searchable && <SearchIcon />}
                      </li>
                    )
                  } else {
                    return (
                      <React.Fragment>
                        <li
                          className="nav-item"
                          key={`${idx}-${navItem.label}`}
                        >
                          <Space>
                            {<navItem.icon />}
                            <Text>{navItem.label}</Text>
                          </Space>

                          {dr.searchable && <SearchIcon />}
                        </li>

                        {navItem?.items && (
                          <ul
                            className="player-nav"
                            style={{
                              padding: 0,
                            }}
                          >
                            {navItem?.items.map((item, idx) => {
                              return (
                                <li
                                  className="nav-item"
                                  key={`${idx}-${item.label}`}
                                >
                                  <Text>{truncate(item.label)}</Text>
                                </li>
                              )
                            })}
                          </ul>
                        )}
                      </React.Fragment>
                    )
                  }
                })}
                <Divider />
              </React.Fragment>
            )
          })}
        </ul>
      </div>
    </StyledSider>
  )
}
