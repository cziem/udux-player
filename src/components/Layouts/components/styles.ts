import { Layout, LayoutProps, SiderProps } from "antd"
import React from "react"
import styled from "styled-components"

const { Header, Sider } = Layout

export const StyledHeader: React.FC<LayoutProps> = styled(Header)`
  display: flex;
  align-items: center;
  height: 95px;

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

export const StyledSider: React.FC<SiderProps> = styled(Sider)`
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 295px;

    /* Custom scroll bar */
    /* scroll-behavior: smooth;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 6px;
      width: 1px;
      background: #fbba12;
    } */
  }

  .profile-wrapper {
    background: #0f0f0f;
    height: 95px;
    margin-bottom: 0.2em;
    display: flex;
    align-items: center;

    .avatar {
      cursor: pointer;
      padding-left: 1em;
      margin-right: 1em;
    }
  }

  .player-menu {
    flex: auto;
    background: transparent;
    background-image: url("/image/sider-bng.png");

    overflow-y: scroll;

    .player-nav {
      margin: 1em 0 0 0;
      padding-left: 1em;

      .nav-item {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        color: #d9d9d9;
        align-items: center;
        list-style-type: none;
        padding: 0.5em 0;

        :hover .ant-typography,
        :hover svg path {
          fill: #fbba12;
          color: #fbba12;
        }

        :hover svg#liked-songs-icon path {
          stroke: #fbba12;
          fill: none;
        }

        :hover svg#discover-icon path.discover-icon-fill {
          fill: #fbba12;
        }

        svg {
          margin-right: 1em;
        }

        .searchable-list {
          align-self: flex-end;
        }
      }
    }
  }
`
