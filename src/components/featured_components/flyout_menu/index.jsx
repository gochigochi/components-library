import FlyoutMenu from './component/FlyoutMenu'
import FeaturedComponent from '../FeaturedComponent'
import { jsx, styled, hoc } from "./code"

const FlyoutMenuComponent = () => {

  return(
    <FeaturedComponent 
      title="Flyout Menu"
      component={<FlyoutMenu />}
      jsx={jsx}
      styled={styled}
      hoc={hoc}
    />
  )
}

export default FlyoutMenuComponent