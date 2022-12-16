import { IconProps } from "./types"

export const ArrowFront: React.FC<IconProps> = ({ height, width, fill }) => (
  <svg
    width={width || "33"}
    height={height || "33"}
    viewBox={`0 0 ${width || "33"} ${height || "33"}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.81052 27.3291L11.227 29.7321L24.6536 16.2919L11.2134 2.85183L8.81052 5.25476L19.8477 16.2919L8.81052 27.3291Z"
      fill={fill || "#D9D9D9"}
    />
  </svg>
)
