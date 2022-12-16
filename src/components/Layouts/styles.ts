import { Layout, LayoutProps } from "antd"
import React from "react"
import styled from "styled-components"

export const StyledLayout: React.FC<LayoutProps> = styled(Layout)`
  min-height: 100vh;

  .ant-layout .ant-layout-header {
    height: 95px;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .site-layout {
  }
`
