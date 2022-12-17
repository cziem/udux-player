import { Divider, Space, Typography } from "antd"
import { SearchIcon } from "components/Icons"
import { ProfileCard } from "components/ProfileCard"
import React from "react"
import { truncate } from "utils"
import { drawerRoutes } from "./sider-data"
import { StyledSider } from "./styles"

const { Text } = Typography

export const Drawer: React.FC = () => {
  return (
    <StyledSider
      width="295"
      trigger={null}
      style={{
        background: "#000",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ProfileCard />

      <div className="player-menu">
        <ul className="player-nav">
          {drawerRoutes.map((dr, idx) => {
            return (
              <React.Fragment key={idx}>
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
                      <React.Fragment key={`${idx}-${navItem.label}`}>
                        <li className="nav-item">
                          <Space>
                            {<navItem.icon />}
                            <Text>{navItem.label}</Text>
                          </Space>

                          {dr.searchable && <SearchIcon />}
                        </li>

                        {navItem?.items && (
                          <ul
                            className="playlist-nav"
                            // className="player-nav"
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
