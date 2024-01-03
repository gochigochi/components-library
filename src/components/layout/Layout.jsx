import CustomScrollbarHoc from "../../hocs/custom_scrollbar/CustomScrollbarHoc"
import { LayoutContainer } from "./Styled"

const Layout = ({ children }) => {

  console.log("layout")

  return (
      <LayoutContainer>{children}</LayoutContainer>
  )
}

export default Layout