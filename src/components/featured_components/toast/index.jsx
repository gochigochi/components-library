import { lazy, Suspense } from "react"
import useInView from "../../../hooks/useInView"
import Implementation from './implementation/Implementation'
import { jsx, styled } from "./code"

const FeaturedComponent = lazy(() => import('../FeaturedComponent'))

const ToastComponent = () => {

    const { ref, inView } = useInView({ threshold: [0.25] })

    return (
        <div ref={ref}>
            <Suspense>
                {
                    inView ?
                        <FeaturedComponent
                            title="Simple Toast"
                            component={<Implementation />}
                            jsx={jsx}
                            styled={styled}
                        /> : null
                }
            </Suspense>
        </div>
    )
}

export default ToastComponent