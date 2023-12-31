import { lazy, Suspense } from "react"
import useInView from "../../../hooks/useInView"
import CustomScrollbar from './component/CustomScrollbar'
import { jsx, styled, hoc } from './code'

const FeaturedComponent = lazy(() => import('../FeaturedComponent'))

const CustomScrollbarComponent = () => {

  const { ref, inView } = useInView({ threshold: [0.25] })

  return (
    <div ref={ref}>
      <Suspense>
        {
          inView ?
            <FeaturedComponent
              title="Custom Scrollbar"
              component={<CustomScrollbar />}
              jsx={jsx}
              styled={styled}
              hoc={hoc}
            /> : null
        }
      </Suspense>
    </div>
  )
}

export default CustomScrollbarComponent