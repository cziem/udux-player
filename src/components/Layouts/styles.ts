import { Layout, LayoutProps } from "antd"
import React from "react"
import styled from "styled-components"

export const StyledLayout: React.FC<LayoutProps> = styled(Layout)`
  min-height: 100vh;

  .site-layout {
    padding-left: 0.2em;
  }
`
