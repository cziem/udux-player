import { ConfigProvider, theme } from "antd"

interface Props {
  children: React.ReactNode
}
export const AntdConfigProvider: React.FC<Props> = ({ children }) => (
  <ConfigProvider
    theme={{
      hashed: false, // TODO: use config to check dev mode here
      algorithm: theme.darkAlgorithm,
    }}
  >
    {children}
  </ConfigProvider>
)
