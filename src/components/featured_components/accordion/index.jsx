import Implementation from './component/Implementation'
import FeaturedComponent from '../FeaturedComponent'
import { jsx, styled } from "./code"

const AccordionComponent = () => {
    return(
        <FeaturedComponent 
            title="Stateless Accordion"
            component={<Implementation />}
            jsx={jsx}
            styled={styled}
        />
    )
}

export default AccordionComponent