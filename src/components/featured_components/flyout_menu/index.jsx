import { useState } from 'react'
import FlyoutMenu from './component/FlyoutMenu'
import CodeBlock from '../../code_block/CodeBlock'
import SectionHeader from '../../section_header/SectionHeader'
import { jsx, styled, hoc } from "./code"
import { Component, Section } from '../../general/GlobalStyled'

const FlyoutMenuComponent = () => {

  const [show, setShow] = useState("component")

  return (
    <Section>
      <SectionHeader state={show} setter={setShow} title="Flyout Menu" component jsx styled hoc />
      <Component>
        {show === "component" ? <FlyoutMenu /> : null}
        {show === "jsx" ? <CodeBlock code={jsx} /> : null}
        {show === "styled" ? <CodeBlock code={styled} /> : null}
        {show === "hoc" ? <CodeBlock code={hoc} /> : null }
      </Component>
    </Section>
  )
}

export default FlyoutMenuComponent