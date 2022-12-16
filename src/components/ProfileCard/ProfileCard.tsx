import { Image, Typography } from "antd"
import { useMediaQuery } from "utils"
import ProfileImage from "../../assets/images/profile-image.png"
import { StyledProfileCard } from "./styles"

const { Text } = Typography

export const ProfileCard = () => {
  const isMobile = useMediaQuery("(max-width: 992px)")

  return (
    <StyledProfileCard className={isMobile ? "mobile-mode" : ""}>
      <div className="avatar">
        <Image preview={false} src={ProfileImage} style={{ width: 45 }} />
      </div>
      <Text strong>Hey! Aleem</Text>
    </StyledProfileCard>
  )
}
