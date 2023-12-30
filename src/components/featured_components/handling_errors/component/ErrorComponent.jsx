import { useState } from 'react'
import axios from 'axios'
import useThrowError from '../../../../hooks/useThrowError'
import ErrorBoundary from '../../../error_boundary/ErrorBoundary'
import { Card, Buttons } from './Styled'
import { PrimaryButton } from '../../../general/GlobalStyled'

const apiKey = import.meta.env.VITE_PIXABAY_API_KEY

const ErrorComponent = () => {

    const [response, setResponse] = useState()
    const throwError = useThrowError()

    const handleClick = async () => {

        try {

            //USE PAGE=5 IN PARAMS FOR AXIOS ERROR
            const response = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=fail&image_type=photo&orientation=vertical&per_page=5`)

            setResponse(response)

        } catch (err) {
            throwError(err)
        }

    }

    return (
        <Card>
            <ErrorBoundary fallback={<p>An error :/</p>}>
                <Buttons>
                    {
                        !response ?
                        <>
                            <PrimaryButton onClick={handleClick}>Fetch image</PrimaryButton>
                            <p>*This throws error</p>
                        </> : 
                        <Image />
                    }
                </Buttons>
            </ErrorBoundary>
        </Card>
    )
}

export default ErrorComponent