import { useState } from 'react'
import { Container, Content, GhostBox, GhostTitle } from './Styled'
import { PrimaryButton } from '../../../general/GlobalStyled'
import Toast from '../component/Toast'

const Implementation = () => {

  const [open, setOpen] = useState()

  return (
    <Container>
      <GhostBox />
      <Content>
        <div>
          <GhostTitle />
          <GhostTitle />
          <GhostTitle />
          <GhostTitle />
          <GhostTitle />
        </div>
        <PrimaryButton onClick={() => setOpen(true)} disabled={open} style={{"alignSelf": "end", "justifySelf": "start"}}>Add to cart</PrimaryButton>
      </Content>
      {open ? <Toast msg="1 product added" setter={setOpen}/> : null}
    </Container>
  )
}

export default Implementation