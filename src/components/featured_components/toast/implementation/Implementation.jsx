import { useState, lazy, Suspense } from 'react'
import { Container, Content, GhostBox, GhostTitle } from './Styled'
import { PrimaryButton } from '../../../general/GlobalStyled'

const Toast = lazy(() => import('../component/Toast'))

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
      <Suspense>
        {open ? <Toast msg="1 product added" setter={setOpen}/> : null}
      </Suspense>
    </Container>
  )
}

export default Implementation