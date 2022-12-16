import { theme } from "antd"
import { ArrowBack, ArrowFront } from "components/Icons"
import React from "react"
import { StyledHeader } from "./styles"

export const Header = () => {
  const [collapsed, setCollapsed] = React.useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <StyledHeader style={{ background: "#000", paddingInline: "4px" }}>
      <div className="navigators">
        <div className="icon-wrapper">
          <ArrowBack />
        </div>
        <div className="icon-wrapper">
          <ArrowFront />
        </div>
      </div>

      <div className="search-wrapper"></div>
    </StyledHeader>
  )
}
