import useAxios from '../../../hooks/useAxios'
import IgGallery from './component/IgGalleryContainer'
import FeaturedComponent from '../FeaturedComponent'
import { jsx, styled } from "./code"

const apiKey = import.meta.env.VITE_PIXABAY_API_KEY

const InstagramGalleryComponent = () => {

    const { response, error, loading } = useAxios({
        method: "get",
        url: `https://pixabay.com/api/?key=${apiKey}&q=nature&image_type=photo&orientation=vertical&per_page=5`,
    })

    return (
        <FeaturedComponent
            title="Instagramish Gallery"
            component={<IgGallery stories={response?.data.hits} loading={loading} error={error} />}
            jsx={jsx}
            styled={styled}
        />
    )
}

export default InstagramGalleryComponent