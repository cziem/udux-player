import { Layout } from "antd"
import { Drawer, Header } from "./components"
import { StyledLayout } from "./styles"

const { Content } = Layout

interface Props {
  children: React.ReactNode
}
export const Layouts: React.FC<Props> = ({ children }) => {
  return (
    <StyledLayout hasSider>
      <Drawer />

      <Layout className="site-layout">
        <Header />

        <Content
          style={{
            margin: "76px 16px 16px 12px",
            padding: "12 24",
            minHeight: 280,
            background: "#000",
          }}
        >
          {children}
        </Content>
      </Layout>
    </StyledLayout>
  )
}
