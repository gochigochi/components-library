import { useEffect } from "react"

const useTimeout = (callback, time) => {

    useEffect(() => {

        console.log("Executed!")

        return () => console.log("UNMOUNTED")

    }, [])

  return
}

export default useTimeout