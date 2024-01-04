import { lazy, Suspense } from "react"
import useAxios from '../../../hooks/useAxios'
import useInView from "../../../hooks/useInView"
import IgGallery from './component/IgGalleryContainer'
import { jsx, styled } from "./code"

const FeaturedComponent = lazy(() => import('../FeaturedComponent'))
const apiKey = import.meta.env.VITE_PIXABAY_API_KEY

const InstagramGalleryComponent = () => {

    const { ref, inView } = useInView({ threshold: [0.25] })
    const { response, error, loading } = useAxios({
        method: "get",
        url: `https://pixabay.com/api/?key=${apiKey}&q=nature&image_type=photo&orientation=vertical&per_page=5`,
    })

    return (
        <div ref={ref}>
            <Suspense>
                {
                    inView ?
                        <FeaturedComponent
                            title="Instagramish Gallery"
                            component={<IgGallery stories={response?.data.hits} loading={loading} error={error} />}
                            jsx={jsx}
                            styled={styled}
                        /> : null
                }
            </Suspense>
        </div>
    )
}

export default InstagramGalleryComponent