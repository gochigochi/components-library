import ObservedElement from "./ObservedElement"
import { Inner, Section } from "./Styled"

const IntObserver = ({ response }) => {

  return (
    <Inner>
      <Section>
        <h2>Scroll down</h2>
      </Section>
      {
        response?.data.hits.map(item => {
          return (
            <ObservedElement
              key={item.id}
              src={item.webformatURL}
              likes={item.likes}
              tags={item.tags}
              user={item.user}
              userImg={item.userImageURL}
            />
          )
        })
      }
    </Inner>
  )
}

export default IntObserver