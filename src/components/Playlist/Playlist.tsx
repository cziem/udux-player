import { Typography } from "antd"
import classNames from "classnames"
import { truncate } from "utils"
import { StyledPlaylist } from "./styles"
import { PlaylistProps } from "./types"
import gsap from "gsap"
import React from "react"

const { Title, Text } = Typography

export const Playlist: React.FC<PlaylistProps> = ({
  title,
  description,
  accent,
  coverArt,
}) => (
  <StyledPlaylist>
    <div className="pl-cover-wrapper">
      <div className={classNames("bng-holder", accent)}></div>
      <div className="cover-art-wrapper">
        <img
          src={coverArt}
          alt={title}
          onMouseEnter={e => {
            gsap.to(e.currentTarget, {
              translateY: -10,
              y: 100,
              duration: 0.2,
            })
          }}
          onMouseLeave={e => {
            gsap.to(e.currentTarget, {
              translateY: 0,
              y: 0,
              duration: 0.2,
            })
          }}
        />
      </div>
      <div className={classNames("bng-holder", accent)}></div>
    </div>

    <div className={classNames("pl-info", accent)}>
      <Title level={5}>{title}</Title>
      <Text className="desc">{truncate(description)}</Text>
    </div>
  </StyledPlaylist>
)
