import { ConfigProvider, theme } from "antd"
import { Config } from "./Config"

interface Props {
  children: React.ReactNode
}
export const AntdConfigProvider: React.FC<Props> = ({ children }) => (
  <ConfigProvider
    theme={{
      hashed: !Config.DEBUG,
      algorithm: theme.darkAlgorithm,
    }}
  >
    {children}
  </ConfigProvider>
)
