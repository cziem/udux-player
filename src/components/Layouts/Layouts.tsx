import { Layout, theme } from "antd"
import { Drawer, Header } from "./components"
import { StyledLayout } from "./styles"

const { Content } = Layout

interface Props {
  children: React.ReactNode
}
export const Layouts: React.FC<Props> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <StyledLayout hasSider>
      <Drawer />

      <Layout className="site-layout">
        <Header />

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </StyledLayout>
  )
}
