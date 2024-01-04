import FeaturedComponent from "../FeaturedComponent"
import NoLibrarySlider from "./component/NoLibrarySlider"

const NoLibrarySliderComponent = () => {
  return (
    <FeaturedComponent 
      title="No Library Slider"
      component={<NoLibrarySlider />}
      resize={true}
    />
  )
}

export default NoLibrarySliderComponent