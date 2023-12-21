import Item from "./item/Item"
import Body from "./item/body/Body"
import Header from "./item/header/Header"
import { AccordionContainer } from './Styled'

const Accordion = ({ children, ...props }) => {
  return (
    <AccordionContainer {...props}>
      {children}
      <input type="radio" name="accordion" id="acc-close" />
    </AccordionContainer>
  )
}

Accordion.Item = Item
Accordion.ItemHeader = Header
Accordion.ItemBody = Body

export default Accordion