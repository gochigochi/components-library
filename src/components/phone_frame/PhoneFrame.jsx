import { Device, Screen } from "./Styled"

const PhoneFrame = ({children}) => {
  return (
    <Device>
        <Screen>
            {children}
        </Screen>
    </Device>
  )
}

export default PhoneFrame