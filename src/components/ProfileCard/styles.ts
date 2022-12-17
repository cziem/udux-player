import { SiderProps } from "antd"
import React from "react"
import styled from "styled-components"

export const StyledProfileCard: React.FC<SiderProps> = styled("div")`
  background: #0f0f0f;
  height: 95px;
  margin-bottom: 0.2em;
  display: flex;
  align-items: center;

  &.mobile-mode {
    position: fixed;
    width: 100%;
    z-index: 9999;
  }

  .avatar {
    cursor: pointer;
    padding-left: 1em;
    margin-right: 1em;
  }

  @media screen and (max-width: 992px) {
    height: 75px;
    top: 0;
  }
`
