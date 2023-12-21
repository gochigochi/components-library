import { useState, useEffect } from 'react'
import SectionHeader from '../../section_header/SectionHeader'
import { Section, Component } from '../../general/GlobalStyled'
import { jsx, styled } from "./code"
import IgGallery from './component/IgGalleryContainer'
import CodeBlock from '../../code_block/CodeBlock'

const InstagramGalleryComponent = () => {

    const [show, setShow] = useState("component")
    
    return (
        <Section>
            <SectionHeader state={show} setter={setShow} title="Instagramish Gallery" component jsx styled />
            <Component>
                {show === "component" ? <IgGallery /> : null}
                {show === "jsx" ? <CodeBlock code={jsx} /> : null}
                {show === "styled" ? <CodeBlock code={styled} /> : null}
            </Component>
        </Section>
    )
}

export default InstagramGalleryComponent