import { useState, useRef, useEffect } from 'react'
import { GalleryContainer, Img } from './Styled'
import ProgressBars from './progress_bars/ProgressBars'
import Buttons from './buttons/Buttons'

const DURATION = 3000

const Gallery = ({ stories }) => {

    const intervalRef = useRef(null)
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