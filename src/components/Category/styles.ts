import { SpaceProps } from "antd"
import React from "react"
import styled from "styled-components"

export const StyledCategory: React.FC<SpaceProps> = styled("div")`
  overflow: hidden;
  scroll-behavior: smooth;
  box-sizing: border-box;

  h3.ant-typography {
    font-weight: 600;
    text-transform: capitalize;
    padding-top: 2em;
  }

  .playlist-wrapper {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`
