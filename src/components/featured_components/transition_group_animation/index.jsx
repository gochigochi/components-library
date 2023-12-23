import Implementation from "./implementation/Implementation"
import FeaturedComponent from "../FeaturedComponent"
import { jsx, styled, hoc } from "./code"

const TransitionGroupAnimationComponent = () => {
    return(
        <FeaturedComponent 
            title="Transition Group Animation"
            component={<Implementation />}
            jsx={jsx}
            styled={styled}
            hoc={hoc}
        />
    )
}

export default TransitionGroupAnimationComponent