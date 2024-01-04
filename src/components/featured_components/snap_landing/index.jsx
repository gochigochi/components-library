import { lazy, Suspense } from "react"
import useInView from "../../../hooks/useInView"
import SnapLanding from "./component/SnapLanding"

const FeaturedComponent = lazy(() => import('../FeaturedComponent'))

const SnapLandingComponent = () => {

    const { ref, inView } = useInView({ threshold: [0.25] })

    return (
        <div ref={ref}>
            <Suspense>
                {
                    inView ?
                        <FeaturedComponent
                            title="Snap Landing"
                            component={<SnapLanding />}
                            resize={true}
                        /> : null
                }
            </Suspense>
        </div>
    )
}

export default SnapLandingComponent