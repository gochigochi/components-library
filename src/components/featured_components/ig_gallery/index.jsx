import { useState } from 'react'
import useAxios from '../../../hooks/useAxios'
import SectionHeader from '../../section_header/SectionHeader'
import { Section, Component } from '../../general/GlobalStyled'
import { jsx, styled } from "./code"
import IgGallery from './component/IgGalleryContainer'
import CodeBlock from '../../code_block/CodeBlock'

const apiKey = import.meta.env.VITE_PIXABAY_API_KEY

const InstagramGalleryComponent = () => {

    const [show, setShow] = useState("component")
    const { response, error, loading } = useAxios({
        method: "get",
        url: `https://pixabay.com/api/?key=${apiKey}&q=nature&image_type=photo&orientation=vertical&per_page=5`,
    })

    return (
        <Section>
            <SectionHeader state={show} setter={setShow} title="Instagramish Gallery" component jsx styled />
            <Component>
                {show === "component" ? <IgGallery stories={response?.data.hits} loading={loading} error={error} /> : null}
                {show === "jsx" ? <CodeBlock code={jsx} /> : null}
                {show === "styled" ? <CodeBlock code={styled} /> : null}
            </Component>
        </Section>
    )
}

export default InstagramGalleryComponent