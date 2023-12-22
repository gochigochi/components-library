import withClickOutside from '../../../../hocs/withClickOutside'
import { MenuContainer } from './Styled'

const Menu = ({ content, ...props }) => {

  return (
    <MenuContainer id="clickable">
        <button role="menuitem">Profile</button>
        <button role="menuitem">Settings</button>
        <button role="menuitem">Logout</button>
    </MenuContainer>
  )
}

export default withClickOutside(Menu)("clickable")