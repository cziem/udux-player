import { SpaceProps } from "antd"
import React from "react"
import styled from "styled-components"

export const StyledCoverArt: React.FC<SpaceProps> = styled("div")`
  background: url("/image/jumbotron.png") no-repeat;
  background-size: cover;
  background-position: center;
  height: 255px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .logo-wrapper,
  .artist-name {
    flex: 1;
    height: 50%;
    padding: 2em 1em;
    display: flex;
    align-items: center;
  }

  .logo-wrapper {
    padding-left: 4em;
  }

  .artist-name {
    align-self: flex-end;
    padding-right: 4em;
  }

  @media screen and (min-width: 550px) and (max-width: 991px) {
    height: 200px;

    .logo-wrapper,
    .artist-name {
      display: none;
    }
  }

  @media screen and (max-width: 549px) {
    height: 150px;

    .logo-wrapper,
    .artist-name {
      display: none;
    }
  }
`
