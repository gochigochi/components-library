import ErrorComponent from './ErrorComponent'
import SomeComponent from './SomeComponent'
import { Inner, GhostHeader, GhostSidebar, Card } from './Styled'

const HandlingErrors = () => {
  return (
    <Inner>
        <GhostHeader />
        <GhostSidebar />
        <SomeComponent />
        <ErrorComponent />
    </Inner>
  )
}

export default HandlingErrors