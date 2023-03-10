import { IconProps } from "./types"

export const ArrowBack: React.FC<IconProps> = ({ width, height, fill }) => (
  <svg
    width={width || "33"}
    height={height || "33"}
    viewBox={`0 0 ${width || "33"} ${height || "33"}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.7715 5.25291L21.355 2.84998L7.92847 16.2901L21.3686 29.7302L23.7715 27.3273L12.7343 16.2901L23.7715 5.25291Z"
      fill={fill || "#D9D9D9"}
    />
  </svg>
)
