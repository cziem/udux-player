import { Layout, LayoutProps } from "antd"
import React from "react"
import styled from "styled-components"

export const StyledLayout: React.FC<LayoutProps> = styled(Layout)`
  min-height: 100vh;

  .ant-layout .ant-layout-header {
    height: 75px;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .site-layout {
  }

  .ant-layout-content {
    margin: 76px 16px 16px 12px;
    padding: 12px 24px;
    min-height: 280px;
    background: #000;
  }

  @media screen and (max-width: 992px) {
    .site-layout {
      padding-bottom: 6em;
    }

    .ant-layout-content {
      margin: 15px 0;
      padding: 12px 0;

      margin-top: 75px;
    }
  }
`
