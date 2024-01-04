import CustomScrollbarHoc from "../../hocs/custom_scrollbar/CustomScrollbarHoc"
import { LayoutContainer } from "./Styled"

const Layout = ({ children }) => {
  return (
      <LayoutContainer>{children}</LayoutContainer>
  )
}

export default Layout