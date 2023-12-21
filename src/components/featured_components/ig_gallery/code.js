export const jsx = `//Gallery.jsx
import { useState, useRef, useEffect } from 'react'
import { GalleryContainer, Img } from './Styled'
import ProgressBars from './progress_bars/ProgressBars'

const DURATION = 3000

const Gallery = ({ stories }) => {

  const intervalRef = useRef()
  const index = useRef(0)
  const [currentStory, setCurrentStory] = useState(stories[index.current].id)

  useEffect(() => {

      intervalRef.current = setInterval(() => {

          if (index.current < stories.length) index.current += 1

          if (index.current >= stories.length) index.current = 0

          setCurrentStory(stories[index.current].id)

      }, DURATION);

      return () => clearInterval(intervalRef.current);

  }, [currentStory])

  const handleBackwards = () => {

    if (index.current > 0) {

        clearInterval(intervalRef.current)
        index.current -= 1
        setCurrentStory(stories[index.current].id)
    }
  }

  const handleForward = () => {

      if (index.current < stories.length - 1) {
          
          clearInterval(intervalRef.current)
          index.current += 1
          setCurrentStory(stories[index.current].id)
      }
  }

  return (
      <GalleryContainer>
          <ProgressBars
              index={index}
              stories={stories}
              currentStory={currentStory}
              duration={DURATION}
          />
          <Buttons handleBackwards={handleBackwards} handleForward={handleForward} />
          {
              stories.map(story => {
                  return <Img key={story.id} src={story.largeImageURL} show={currentStory === story.id} />
              })
          }
      </GalleryContainer>
  )
}

export default Gallery

//ProgressBars.jsx
import { BarsContainer, ProgressBar, Bar } from "./Styled"

const ProgressBars = ({ index, stories, currentStory, duration }) => {

  const t = (duration / 1000) + "s"

  return (
    <BarsContainer>
      {
        stories.map(story => {

          const storyIndex = stories.findIndex(stry => stry.id === story.id)

          return (
            <ProgressBar wasactive={storyIndex < index.current}>
              {story.id === currentStory ? <Bar t={t} /> : null}
            </ProgressBar>
          )
        })
      }
    </BarsContainer>
  )
}

export default ProgressBars

//Buttons
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5"
import { ButtonsContainer, Button } from "./Elements"

const Buttons = ({ handleBackwards, handleForward }) => {
    return (
        <ButtonsContainer>
            <Button pos="left" onClick={handleBackwards}>
                <IoArrowBackCircleOutline />
            </Button>
            <Button pos="right" onClick={handleForward}>
                <IoArrowForwardCircleOutline />
            </Button>
        </ButtonsContainer>
    )
}

export default Buttons
`

export const styled = `import styled, { keyframes } from "styled-components"

export const GalleryContainer = styled.div\`
    position: relative;
    width: 100%;
    height: 100%;
\`

export const Img = styled.img\`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: ${({ show }) => show ? "block" : "none"};
\`

export const BarsContainer = styled.div\`
    position: absolute;
    top: .7rem;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    display: grid;
    gap: .3rem;
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
\`

const barProgress = keyframes\`
    from {
        width: 0;
    } 
    to {
        width: 100%;
    }
\`

export const ProgressBar = styled.div\`
    position: relative;
    height: .2rem;
    background-color: \${({ wasactive }) => wasactive ? "#fff" : "rgba(250, 250, 250, 0.3)"};
    cursor: pointer;
    transition: all .1s ease-in;
\`

export const Bar = styled.div\`
    background-color: #fff;
    animation: \${barProgress} 3s linear;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
\`

export const ButtonsContainer = styled.div\`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    justify-content: space-between;

    &:hover > button > svg {
        transform: translateY(0);
        opacity: 1;
    }
\`

export const Button = styled.button\`
    height: 100%;
    width: 15%;
    max-width: 6rem;
    background-color: rgba(0, 0, 0, 0.1);
    display: grid;
    place-items: center;
    cursor: pointer;
    color: #fff;
    font-size: 2.2rem;

    svg {
        transform: translateY(10px);
        opacity: 0;
        transition: all .4s;
    }

    @media all and (max-width: 600px) {
        opacity: 0;
        width: 50%;
        max-width: 1000;
    }
\`
`