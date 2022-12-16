import { Typography } from "antd"
import classNames from "classnames"
import { truncate } from "utils"
import { StyledPlaylist } from "./styles"
import { PlaylistProps } from "./types"

const { Title, Text } = Typography

export const Playlist: React.FC<PlaylistProps> = ({
  title,
  description,
  accent,
  coverArt,
}) => {
  return (
    <StyledPlaylist>
      <div className="pl-cover-wrapper">
        <div className={classNames("bng-holder", accent)}></div>
        <div className="cover-art-wrapper">
          <img src={coverArt} alt={title} />
        </div>
        <div className={classNames("bng-holder", accent)}></div>
      </div>

      <div className={classNames("pl-info", accent)}>
        <Title level={5}>{title}</Title>
        <Text className="desc">{truncate(description)}</Text>
      </div>
    </StyledPlaylist>
  )
}
