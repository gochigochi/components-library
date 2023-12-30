export const jsx = `import { useState, useRef, useEffect } from 'react'
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

export default Chat`

export const styled = `import styled from "styled-components"

export const Container = styled.div\`
    width: 100%;
    height: 100%;
    background-color: var(--ghost-color);
    display: grid;
    place-items: center;
\`

export const Inner = styled.div\`
    width: 90%;
    max-width: 20rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
\`

export const Screen = styled.div\`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100% - 2.3rem);
\`

export const Bubble = styled.div\`
    position: relative;
    line-height: 1.6;
    font-weight: 300;
    font-size: .9rem;
    padding: 1rem;
    border-radius: 8px;
    max-width: 15rem;
    margin-bottom: 2rem;
    align-self: \${({ mine }) => mine ? "flex-end" : "flex-start"}; 
    background-color: \${({ mine }) => mine ? "var(--pale-red)" : "#ededed"};

    &:before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border: 15px solid transparent;
        \${({mine}) => !mine && "border-right: 15px solid #ededed;"}
        \${({mine}) => mine && "border-left: 15px solid var(--pale-red);"}
        transform: \${({mine}) => mine ? "rotate(-50deg)" : "rotate(60deg)"};
        \${({mine}) => !mine && "left: -3px;"}
        \${({mine}) => mine && "right: -6px;"}
        bottom: -4px;
        z-index: 0;
    }
\`

export const BubbleText = styled.p\`
    white-space: pre-wrap;
\`

export const Input = styled.input\`
    width: 80%;
    height: 2.3rem;
    border-radius: 50px 0 0 50px;
    border: 1px solid #cdcdcd;
    border-right: none;
    padding: 0 1rem;
    outline: none;
    \`

export const Send = styled.input\`
    width: 20%;
    height: 2.3rem;
    background-color: #fff;
    border-radius: 0 50px 50px 0;
    border: 1px solid #cdcdcd;
    cursor: pointer;
\``