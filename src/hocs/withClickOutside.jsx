import { useEffect } from "react"

const withClickOutside = (WrappedComponent) => (id) => {

    return (props) => {
        
        useEffect(() => {
            
            const handleClick = (e) => e.target.id !== id && props.action()

            const timer = setTimeout(() => window.addEventListener("click", handleClick), 200 )

            return () => {
                clearTimeout(timer)
                window.removeEventListener("click", handleClick)
            }

        })

        return <WrappedComponent {...props} />
    }
}

export default withClickOutside