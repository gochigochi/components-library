import useAxios from '../../../hooks/useAxios'
import FeaturedComponent from '../FeaturedComponent'
import { hooks, jsx } from './code'
import IntObserver from './component/IntObserver'
const apiKey = import.meta.env.VITE_PIXABAY_API_KEY

const IntersectionObserverComponent = () => {

    const { response } = useAxios({
        url: `https://pixabay.com/api/?key=${apiKey}&q=sidewalk&image_type=photo&orientation=vertical&per_page=5`,
    })

    return (
        <FeaturedComponent
            title="Animate with Intersection Observer"
            component={<IntObserver response={response} />}
            jsx={jsx}
            hooks={hooks}
        />
    )
}

export default IntersectionObserverComponent