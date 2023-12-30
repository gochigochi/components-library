//from https://www.developerway.com/posts/how-to-handle-errors-in-react
// https://codesandbox.io/p/sandbox/simple-async-error-in-error-boundary-forked-2j88fl?file=%2Fsrc%2FApp.tsx%3A41%2C28
import { useState } from "react"

const useThrowError = () => {

    const [state, setState] = useState()

    return (err) => {
        setState(() => {
            throw err
        })
    }
}

export default useThrowError