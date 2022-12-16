import {
  DiscoverIcon,
  HomeIcon,
  MusicAlbumIcon,
  RecordsIcon,
} from "components/Icons"
import { StyledBottomNav } from "./styles"

export const BottomNavigator = () => {
  return (
    <StyledBottomNav>
      <nav className="nav-item">
        <HomeIcon />
      </nav>
      <nav className="nav-item">
        <DiscoverIcon />
      </nav>
      <nav className="nav-item">
        <MusicAlbumIcon />
      </nav>
      <nav className="nav-item">
        <RecordsIcon />
      </nav>
    </StyledBottomNav>
  )
}
