import { Layout } from './components/layout/Styled'
import FlyoutMenuComponent from "./components/featured_components/flyout_menu"
import AccordionComponent from './components/featured_components/accordion'
import InstagramGalleryComponent from './components/featured_components/ig_gallery'
import ToastComponent from './components/featured_components/toast'
import TransitionGroupAnimationComponent from './components/featured_components/transition_group_animation'
import InfiniteScrollGalleryCompononent from './components/featured_components/inifinite_scroll_gallery'
import IntersectionObserverComponent from './components/featured_components/intersection_observer'

function App() {
  return (
    <Layout>
      <IntersectionObserverComponent />
      <InfiniteScrollGalleryCompononent />
      <TransitionGroupAnimationComponent />
      <ToastComponent />
      <InstagramGalleryComponent />
      <AccordionComponent />
      <FlyoutMenuComponent />
    </Layout>
  )
}

export default App
