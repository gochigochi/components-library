import Layout from "./components/layout/Layout"
import FlyoutMenuComponent from "./components/featured_components/flyout_menu"
import AccordionComponent from './components/featured_components/accordion'
import InstagramGalleryComponent from './components/featured_components/ig_gallery'
import ToastComponent from './components/featured_components/toast'
import TransitionGroupAnimationComponent from './components/featured_components/transition_group_animation'
import InfiniteScrollGalleryCompononent from './components/featured_components/inifinite_scroll_gallery'
import IntersectionObserverComponent from './components/featured_components/intersection_observer'
import HandlingErrorsComponent from './components/featured_components/handling_errors'
import ChatComponent from './components/featured_components/chat'
import CustomScrollbarComponent from './components/featured_components/custom_scrollbar'
import FileUploaderComponent from './components/featured_components/file_uploader'
import NoLibrarySliderComponent from "./components/featured_components/no_library_slider"
import MobileHorizontalScrollComponent from "./components/featured_components/mobile_horizontal_scroll"
import SnapLandingComponent from "./components/featured_components/snap_landing"
import Hero from "./components/hero/Hero"

function App() {
  return (
    <Layout>
      {/* <Hero /> */}
      {/* <MobileHorizontalScrollComponent /> */}
      <NoLibrarySliderComponent />
      <SnapLandingComponent />
      <FileUploaderComponent />
      <CustomScrollbarComponent />
      <ChatComponent />
      <IntersectionObserverComponent />
      <InfiniteScrollGalleryCompononent />
      <TransitionGroupAnimationComponent />
      <HandlingErrorsComponent />
      <ToastComponent />
      <InstagramGalleryComponent />
      <AccordionComponent />
      <FlyoutMenuComponent />
    </Layout>
  )
}

export default App
