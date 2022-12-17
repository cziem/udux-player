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

  .mobile-only {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .see-more {
      padding-top: 2em;
      margin-bottom: 0.5em;
      color: #898989;
      font-size: small;
    }
  }

  @media screen and (max-width: 992px) {
    padding: 0 1.58em;
  }

  @media screen and (max-width: 622px) {
    h3.ant-typography {
      font-size: 1.15em;
    }
  }
`
