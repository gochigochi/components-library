import useAxios from '../../../hooks/useAxios'
import { lazy, Suspense } from "react"
import useInView from "../../../hooks/useInView"
import { hooks, jsx } from './code'
import IntObserver from './component/IntObserver'

const FeaturedComponent = lazy(() => import('../FeaturedComponent'))
const apiKey = import.meta.env.VITE_PIXABAY_API_KEY

const IntersectionObserverComponent = () => {

    const { response } = useAxios({
        url: `https://pixabay.com/api/?key=${apiKey}&q=sidewalk&image_type=photo&orientation=vertical&per_page=5`,
    })
    const { ref, inView } = useInView({ threshold: [0.25] })

    return (
        <div ref={ref}>
            <Suspense>
                {
                    inView ?
                        <FeaturedComponent
                            title="Animate with Intersection Observer"
                            component={<IntObserver response={response} />}
                            jsx={jsx}
                            hooks={hooks}
                        /> : null
                }
            </Suspense>
        </div>
    )
}

export default IntersectionObserverComponent