import { MdOutlineCategory } from "react-icons/md"
import { ButtonBadge, ButtonsContainer, SectionHeaderContainer, SectionTitle } from '../general/GlobalStyled'

const SectionHeader = ({
    setter = () => {},
    state = null,
    title = "Featured Component",
    component,
    jsx,
    styled,
    hoc,
    tailwind,
}) => {

    return (
        <SectionHeaderContainer>
            <SectionTitle>{title}</SectionTitle>
            <ButtonsContainer>
                {component ? <ButtonBadge onClick={() => setter("component")} active={state === "component"}><MdOutlineCategory /></ButtonBadge> : null}
                {jsx ? <ButtonBadge onClick={() => setter("jsx")} active={state === "jsx"}>JSX</ButtonBadge> : null}
                {styled ? <ButtonBadge onClick={() => setter("styled")} active={state === "styled"}>Styled</ButtonBadge> : null}
                {hoc ? <ButtonBadge onClick={() => setter("hoc")} active={state === "hoc"}>HOC</ButtonBadge> : null}
            </ButtonsContainer>
        </SectionHeaderContainer>
    )
}

export default SectionHeader