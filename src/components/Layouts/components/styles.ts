import { Layout, LayoutProps } from "antd"
import React from "react"
import styled from "styled-components"

const { Header } = Layout

export const StyledHeader: React.FC<LayoutProps> = styled(Header)`
  display: flex;
  align-items: center;
  padding-inline: 2px;

  .navigators {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 125px;

    .icon-wrapper {
      border-radius: 2px;
      background: #0f0f0f;
      height: 41px;
      width: 48px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .search-wrapper {
    display: flex;
    width: 470px;
    height: 56px;
    margin-left: 80px;
    align-items: center;
    border: 1px solid #0f0f0f;
    border-radius: 4px;
    padding: 0 0.8em;

    .ant-input {
      border: none;
      background: transparent;
      height: 100%;

      :focus {
        box-shadow: none;
      }
    }
  }
`
