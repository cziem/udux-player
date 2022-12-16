import { Layout } from "antd"
import { ProfileCard } from "components/ProfileCard"
import { useMediaQuery } from "utils"
import { Drawer, Header } from "./components"
import { StyledLayout } from "./styles"

const { Content } = Layout

interface Props {
  children: React.ReactNode
}
export const Layouts: React.FC<Props> = ({ children }) => {
  const matches = useMediaQuery("(min-width: 992px)")

  return (
    <StyledLayout hasSider>
      <Drawer />

      <Layout className="site-layout">
        {matches ? <Header /> : <ProfileCard />}

        <Content>{children}</Content>
      </Layout>
    </StyledLayout>
  )
}
