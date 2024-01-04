import { lazy, Suspense } from "react"
import useInView from "../../../hooks/useInView"
import HandlingErrors from './component/HandlingErrors'

const FeaturedComponent = lazy(() => import('../FeaturedComponent'))

const HandlingErrorsComponent = () => {

    const { ref, inView } = useInView({ threshold: [0.25] })

    return (
        <div ref={ref}>
            <Suspense>
                {
                    inView ?
                        <FeaturedComponent
                            title="Handling Errors"
                            component={<HandlingErrors />}
                        /> : null
                }
            </Suspense>
        </div>
    )
}

export default HandlingErrorsComponent