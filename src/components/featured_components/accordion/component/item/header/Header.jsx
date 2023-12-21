const Header = ({ children, id, ...props }) => {
    return (
        <label
            className="box-title"
            htmlFor={id}
            {...props}
        >
            {children}
        </label>
    )
}

export default Header