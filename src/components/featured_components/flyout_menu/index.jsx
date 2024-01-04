import { lazy, Suspense } from "react"
import useInView from "../../../hooks/useInView"
import FlyoutMenu from './component/FlyoutMenu'
import { jsx, styled, hoc } from "./code"

const FeaturedComponent = lazy(() => import('../FeaturedComponent'))

const FlyoutMenuComponent = () => {

  const { ref, inView } = useInView({ threshold: [0.25] })

  return (
    <div ref={ref}>
      <Suspense>
        {
          inView ?
            <FeaturedComponent
              title="Flyout Menu"
              component={<FlyoutMenu />}
              jsx={jsx}
              styled={styled}
              hoc={hoc}
            /> : null
        }
      </Suspense>
    </div>
  )
}

export default FlyoutMenuComponent