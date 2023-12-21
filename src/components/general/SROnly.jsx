import styled from "styled-components"

const Hidden = styled.div`
    position: asbolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
`

const SROnly = ({children}) => <Hidden>{children}</Hidden>

export default SROnly