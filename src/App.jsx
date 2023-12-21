import { Layout } from './components/layout/Styled'
import { Component, Section, SectionTitle } from './components/general/GlobalStyled'
import FlyoutMenuComponent from "./components/featured_components/flyout_menu"
import AccordionComponent from './components/featured_components/accordion'
import InstagramGalleryComponent from './components/featured_components/ig_gallery'

function App() {
  return (
    <Layout>
      <InstagramGalleryComponent />
      <AccordionComponent />
      <FlyoutMenuComponent />
    </Layout>
  )
}

export default App
