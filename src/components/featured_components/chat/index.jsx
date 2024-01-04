import { lazy, Suspense } from "react"
import useInView from "../../../hooks/useInView"
import Chat from './component/Chat'
import { jsx, styled } from "./code"

const FeaturedComponent = lazy(() => import('../FeaturedComponent'))

const ChatComponent = () => {

  const { ref, inView } = useInView({ threshold: [0.25] })

  return (
    <div ref={ref}>
      <Suspense>
        {
          inView ?
            <FeaturedComponent
              title="Chat"
              component={<Chat />}
              jsx={jsx}
              styled={styled}
            /> : null
        }
      </Suspense>
    </div>
  )
}

export default ChatComponent