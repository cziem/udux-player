import { Input } from "antd"
import { ArrowBack, ArrowFront, SearchIcon } from "components/Icons"
import { StyledHeader } from "./styles"

export const Header = () => {
  return (
    <StyledHeader style={{ background: "#000", paddingInline: "4px" }}>
      <div className="navigators">
        <div className="icon-wrapper">
          <ArrowBack />
        </div>
        <div className="icon-wrapper">
          <ArrowFront />
        </div>
      </div>

      <div className="search-wrapper">
        <SearchIcon />
        <Input type="search" />
      </div>
    </StyledHeader>
  )
}
