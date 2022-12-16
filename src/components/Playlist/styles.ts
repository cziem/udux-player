import { SpaceProps } from "antd"
import React from "react"
import styled from "styled-components"

export const StyledPlaylist: React.FC<SpaceProps> = styled("div")`
  border: 1px solid #707070;
  min-width: 226px;
  min-height: 256px;
  flex-direction: column;
  display: flex;
  padding: 1em 0;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 2em;
  }

  .pl-cover-wrapper {
    display: flex;
    align-items: flex-end;
  }

  .bng-holder {
    flex: 1;
    width: 10px;
    height: 150px;
  }

  .cover-art-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    padding: 0.2em 0.85em 0.85em;
    border: 1px solid #707070;
  }

  .pl-info {
    background: #0f0f0f;
    padding: 1em 2em;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h5.ant-typography {
      text-transform: capitalize;
    }

    .desc {
      font-size: smaller;
      line-height: 0.89;
      color: rgba(255, 255, 255, 0.9);
    }
  }

  .gold {
    background: linear-gradient(89.79deg, #ab491c -19.39%, #ddae45 123.38%);
  }
  .red {
    background: linear-gradient(89.79deg, #c61522 -19.39%, #030304 123.38%);
  }
  .blue {
    background: linear-gradient(89.79deg, #204f9d -19.39%, #adc0d1 123.38%);
  }
`
