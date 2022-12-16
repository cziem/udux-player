import { Layout, LayoutProps, SiderProps, SpaceProps } from "antd"
import React from "react"
import styled from "styled-components"

const { Header, Sider } = Layout

export const StyledHeader: React.FC<LayoutProps> = styled(Header)`
  display: flex;
  align-items: center;
  height: 95px;
  z-index: 9999;

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

  @media screen and (max-width: 992px) {
    display: none;
  }
`

export const StyledSider: React.FC<SiderProps> = styled(Sider)`
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 295px;
  }

  .player-menu {
    flex: auto;
    background: transparent;
    background-image: url("/image/sider-bng.png");

    overflow-y: scroll;

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
    }

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

  @media screen and (max-width: 992px) {
    display: none;
  }
`
export const StyledBottomNav: React.FC<SpaceProps> = styled("div")`
  background: #000;
  background-image: url("/image/sider-bng.png");
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;

  .nav-item {
    padding: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover svg {
      fill: #fbba12;
      color: #fbba12;
    }
  }

  svg {
    height: 30px;
    width: 30px;
  }
`
