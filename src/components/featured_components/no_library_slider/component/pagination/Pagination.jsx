import { PaginationContainer, Dot } from "./Styled"

const Pagination = ({ ids, index, handlePagination }) => {
  return (
    <PaginationContainer>
      {ids?.map(id => <Dot key={id} onClick={() => handlePagination(id)} active={index === ids?.indexOf(id)} />)}
    </PaginationContainer>
  )
}

export default Pagination