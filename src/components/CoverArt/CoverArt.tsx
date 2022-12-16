import { UduxLogo } from "components/Icons"
import OmahLay from "../../assets/images/Omah-Lay.png"
import { StyledCoverArt } from "./styles"

export const CoverArt = () => {
  return (
    <StyledCoverArt>
      <div className="logo-wrapper">
        <UduxLogo />
      </div>

      <div className="artist-name">
        <img src={OmahLay} alt="Omah Lay" />
      </div>
    </StyledCoverArt>
  )
}
