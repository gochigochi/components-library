import { useState } from 'react'
import SectionHeader from '../../section_header/SectionHeader'
import CodeBlock from "../../code_block/CodeBlock"
import { Section, Component } from '../../general/GlobalStyled'
import { jsx, styled } from "./code"
import Implementation from './implementation/Implementation'

const ToastComponent = () => {

    const [show, setShow] = useState("component")

    return (
        <Section>
            <SectionHeader state={show} setter={setShow} title="Simple Toast" component jsx styled />
            <Component>
                {show === "component" ? <Implementation /> : null }
                {show === "jsx" ? <CodeBlock code={jsx} /> : null}
                {show === "styled" ? <CodeBlock code={styled} /> : null}
            </Component>
        </Section>
    )
}

export default ToastComponent