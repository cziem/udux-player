import { Typography } from "antd"
import { Playlist } from "components/Playlist"
import { PlaylistProps } from "components/Playlist/types"
import { StyledCategory } from "./styles"

const { Title } = Typography

export interface CategoryProps {
  title: string
  playlist: PlaylistProps[]
}
export const Category: React.FC<CategoryProps> = ({ title, playlist }) => {
  return (
    <StyledCategory>
      <Title level={3}>{title}</Title>

      <div className="playlist-wrapper">
        {playlist.map((pl, idx) => (
          <Playlist {...pl} key={`${idx}-${pl.coverArt}`} />
        ))}
      </div>
    </StyledCategory>
  )
}
