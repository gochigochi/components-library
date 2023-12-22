import { useState } from "react"
import SectionHeader from "../../section_header/SectionHeader"
import Implementation from "./implementation/Implementation"
import { Section, Component } from "../../general/GlobalStyled"

const TransitionGroupAnimationComponent = () => {

    const [show, setShow] = useState("component")

    return (
        <Section>
            <SectionHeader state="show" setter={setShow} title="Transition Group Animation" component />
            <Component>
                {show === "component" ? <Implementation /> : null}
                {/* {show === "jsx" ? <CodeBlock code={jsx} /> : null} */}
                {/* {show === "styled" ? <CodeBlock code={styled} /> : null} */}
            </Component>
        </Section>
    )
}

export default TransitionGroupAnimationComponent