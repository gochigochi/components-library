import { useState, lazy, Suspense } from 'react'
import SectionHeader from '../section_header/SectionHeader'
import { Component, Section } from '../general/GlobalStyled'
import SectionLoader from '../loaders/section_loader/SectionLoader'

const CodeBlock = lazy(() => import('../code_block/CodeBlock'))

const FeaturedComponent = ({
    title = "Featured Component",
    init = "component",
    component = null,
    jsx = null,
    styled = null,
    hoc = null,
    hooks = null,
    tailwind = null,
    resize = false,
}) => {

    const [show, setShow] = useState(init)

    return (
        <Section>
            <SectionHeader
                title={title}
                state={show}
                setter={setShow}
                component={!!component}
                jsx={!!jsx}
                styled={!!styled}
                hoc={!!hoc}
                hooks={!!hooks}
                tailwind={!!tailwind}
            />
            <Component resize={resize}>
                <Suspense fallback={<SectionLoader style={{"backgroundColor": "#282A36"}} />}>
                    {component && show === "component" ? component : null}
                    {jsx && show === "jsx" ? <CodeBlock code={jsx} /> : null}
                    {styled && show === "styled" ? <CodeBlock code={styled} /> : null}
                    {hoc && show === "hoc" ? <CodeBlock code={hoc} /> : null}
                    {hooks && show === "hooks" ? <CodeBlock code={hooks} /> : null}
                </Suspense>
            </Component>
        </Section>
    )
}

export default FeaturedComponent