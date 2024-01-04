import { lazy, Suspense } from "react"
import useInView from "../../../hooks/useInView"
import InfiniteScrollGallery from './component/InfiniteScrollGallery'
import { jsx, styled, hooks } from './code'

const FeaturedComponent = lazy(() => import('../FeaturedComponent'))

const InfiniteScrollGalleryCompononent = () => {

  const { ref, inView } = useInView({ threshold: [0.25] })

  return (
    <div ref={ref}>
      <Suspense>
        {
          inView ?
            <FeaturedComponent
              title="Infinite Scroll Gallery"
              component={<InfiniteScrollGallery />}
              jsx={jsx}
              styled={styled}
              hooks={hooks}
            /> : null
        }
      </Suspense>
    </div>
  )
}

export default InfiniteScrollGalleryCompononent