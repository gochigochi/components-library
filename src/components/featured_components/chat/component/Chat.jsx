import { useState, useRef, useEffect } from 'react'
import {
    Container,
    Inner,
    Screen,
    Input,
    Send,
    Bubble,
    BubbleText,
} from './Styled'

const Chat = () => {

    const screenRef = useRef()
    const [messages, setMessages] = useState([{ id: 0, text: "Hi! How are you?" }])

    useEffect(() => {
        const index = screenRef.current.childNodes.length - 1
        const lastMessageDomRef = screenRef.current.childNodes[index]
        screenRef.current.scrollTop = screenRef.current.scrollHeight + lastMessageDomRef.offsetHeight
    }, [messages])

    const handleSubmit = (e) => {

        e.preventDefault()

        const data = new FormData(e.currentTarget)
        const message = data.get("userMessage")

        if (!message || message.length <= 0) return

        setMessages([...messages, { id: messages.length, mine: true, text: message }])
        e.currentTarget.reset()
    }

    return (
        <Container>
            <Inner>
                <Screen ref={screenRef}>
                    {
                        messages.map(msg => {
                            return(
                                <Bubble key={msg.id} mine={msg.mine}>
                                    <BubbleText>{msg.text}</BubbleText>
                                </Bubble>
                            )
                        })
                    }
                </Screen>
                <form onSubmit={handleSubmit}>
                    <Input type="text" name="userMessage" />
                    <Send type="submit" />
                </form>
            </Inner>
        </Container>
    )
}

export default Chat