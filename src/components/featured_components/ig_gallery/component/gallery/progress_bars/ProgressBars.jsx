import { BarsContainer, ProgressBar, Bar } from "./Styled"

const ProgressBars = ({ index, stories, currentStory, duration }) => {

  const t = (duration / 1000) + "s"

  return (
    <BarsContainer>
      {
        stories.map(story => {

          const storyIndex = stories.findIndex(stry => stry.id === story.id)

          return (
            <ProgressBar key={story.id} wasactive={storyIndex < index.current}>
              {story.id === currentStory ? <Bar t={t} /> : null}
            </ProgressBar>
          )
        })
      }
    </BarsContainer>
  )
}

export default ProgressBars