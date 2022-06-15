import Pagination from "react-bootstrap/Pagination"

interface paginationProps {
  nPages: number
}

export default function PaginationComp({
  nPages,
}: paginationProps): JSX.Element {
  const items = []
  for (let page = 1; page <= nPages; page++) {
    items.push(<Pagination.Item key={page}>{page}</Pagination.Item>)
  }

  const paginationBasic = (
    <>
      <Pagination size="sm">{items}</Pagination>
      <br />
    </>
  )

  return paginationBasic
}
