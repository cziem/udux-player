import { Layout } from "antd"
import { ProfileCard } from "components/ProfileCard"
import { useMediaQuery } from "utils"
import { BottomNavigator, Drawer, Header } from "./components"
import { StyledLayout } from "./styles"

const { Content } = Layout

interface Props {
  children: React.ReactNode
}
export const Layouts: React.FC<Props> = ({ children }) => {
  const isMobile = useMediaQuery("(max-width: 992px)")

  return (
    <StyledLayout hasSider>
      <Drawer />

      <Layout className="site-layout">
        {isMobile ? <ProfileCard /> : <Header />}

        <Content>{children}</Content>
      </Layout>

      {isMobile && <BottomNavigator />}
    </StyledLayout>
  )
}
