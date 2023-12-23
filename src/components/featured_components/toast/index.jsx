import Implementation from './implementation/Implementation'
import FeaturedComponent from '../FeaturedComponent'
import { jsx, styled } from "./code"

const ToastComponent = () => {
    return (
        <FeaturedComponent 
            title="Simple Toast" 
            component={<Implementation />}
            jsx={jsx} 
            styled={styled} 
        />
    )
}

export default ToastComponent