
const items = ["Ofertas", "Especiales", "Pizzas", "Hamburguesas", "Ensaladas", "Empanadas", "Especiales"]

const Carousel = () => {


  return (
    <div className="h-6">
        <ul className="flex flex-row gap-4 overflow-y-auto scroll-p-2">
            {
                items.map(item => {
                    return(
                        <button>{item}</button>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Carousel