import { useState } from 'react'
import CodeBlock from '../../code_block/CodeBlock'
import SectionHeader from '../../section_header/SectionHeader'
import { Component, Section } from '../../general/GlobalStyled'
import { jsx, styled } from "./code"
import Implementation from './component/Implementation'

const AccordionComponent = () => {

    const [show, setShow] = useState("component")

    return (
        <Section>
            <SectionHeader state={show} setter={setShow} title="Stateless Accordion" component jsx styled/>
            <Component>
                {show === "component" ? <Implementation /> : null}
                {show === "jsx" ? <CodeBlock code={jsx} /> : null}
                {show === "styled" ? <CodeBlock code={styled} /> : null}
            </Component>
        </Section>
    )
}

export default AccordionComponent