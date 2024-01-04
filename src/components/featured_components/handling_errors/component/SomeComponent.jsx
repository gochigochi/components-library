import { useState } from 'react'
import axios from 'axios'
import ErrorBoundary from '../../../error_boundary/ErrorBoundary'
import { PrimaryButton } from '../../../general/GlobalStyled'
import { Buttons, Card } from './Styled'
import useThrowError from '../../../../hooks/useThrowError'

const apiKey = import.meta.env.VITE_PIXABAY_API_KEY

const SomeComponent = () => {

    const throwError = useThrowError()
    const [response, setResponse] = useState()

    const handleClick = async () => {

        try {

            const response = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=nature&image_type=photo&orientation=vertical&per_page=5`)

            setResponse(response.data.hits[0])

        } catch (err) {
            console.log(err)
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
                                <p>*This fetch works</p>
                            </> :
                            <img src={response.webformatURL} alt="" />
                    }
                </Buttons>
            </ErrorBoundary>
        </Card>
    )
}

export default SomeComponent