const Item = ({ children, id, ...props }) => {
    return (
        <div>
            <input type="radio" name="accordion" id={id} />
            <div className="box">
                <label className="box-close" htmlFor="acc-close"></label>
                {children}
            </div>
        </div>
    )
}

export default Item