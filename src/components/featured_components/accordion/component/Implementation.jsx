import Accordion from "./Accordion"

const Implementation = () => {

    const example = [
        { id: 1, q: "Lorem ipsum", a: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { id: 2, q: "Vel risus", a: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { id: 3, q: "Sed arcu", a: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { id: 4, q: "Est ultricies", a: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    ]

    return (
        <Accordion>
            {
                example.map(item => {
                    return (
                        <Accordion.Item id={item.id} key={item.id}>
                            <Accordion.ItemHeader id={item.id}>{item.q}</Accordion.ItemHeader>
                            <Accordion.ItemBody>{item.a}</Accordion.ItemBody>
                        </Accordion.Item>
                    )
                })
            }
        </Accordion>
    )
}

export default Implementation