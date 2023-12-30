import Chat from './component/Chat'
import { jsx, styled } from "./code"
import FeaturedComponent from '../FeaturedComponent'

const ChatComponent = () => {
  return (
    <FeaturedComponent 
        title="Chat"
        component={<Chat />}
        jsx={jsx}
        styled={styled}

    />
  )
}

export default ChatComponent