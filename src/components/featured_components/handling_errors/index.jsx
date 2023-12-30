import FeaturedComponent from '../FeaturedComponent'
import HandlingErrors from './component/HandlingErrors'

const HandlingErrorsComponent = () => {

    return (
        <FeaturedComponent
            title="Handling Errors"
            component={<HandlingErrors /> }
        />
    )
}

export default HandlingErrorsComponent