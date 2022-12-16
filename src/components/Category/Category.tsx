import { Typography } from "antd"
import { Playlist } from "components/Playlist"
import { PlaylistProps } from "components/Playlist/types"
import { useMediaQuery } from "utils"
import { StyledCategory } from "./styles"

const { Title, Text } = Typography

export interface CategoryProps {
  title: string
  playlist: PlaylistProps[]
}
export const Category: React.FC<CategoryProps> = ({ title, playlist }) => {
  const matches = useMediaQuery("(max-width: 622px)")

  return (
    <StyledCategory>
      {matches ? (
        <div className="mobile-only">
          <Title level={3}>{title}</Title>
          <Text className="see-more">See more</Text>
        </div>
      ) : (
        <Title level={3}>{title}</Title>
      )}

      <div className="playlist-wrapper">
        {playlist.map((pl, idx) => (
          <Playlist {...pl} key={`${idx}-${pl.coverArt}`} />
        ))}
      </div>
    </StyledCategory>
  )
}
