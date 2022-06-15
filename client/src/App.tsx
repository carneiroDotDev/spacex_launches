import { useEffect, useState } from "react"
import { Alert, Container, Row } from "react-bootstrap"
import Pagination from "react-responsive-pagination"
import "./pagination.css"

import { Forms, Header, LaunchesList } from "./components"
import fetchdata, { paginatedQuery } from "./utils/fetchdata"

function App() {
  const [error, setError] = useState<string>("")
  const [data, setData] = useState<paginatedQuery>()
  const [loading, setLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [limit, setLimit] = useState<string>("10")
  const [year, setYear] = useState<string | undefined>()

  useEffect(() => {
    const fetchLaunches = async () => {
      setLoading(true)
      const data = await fetchdata(year, page, limit)
      if (data.docs.length === 0) {
        setError("Your query returns no results")
        setTotalPages(0)
        setData(undefined)
        setLoading(false)
        return
      }
      setData(data)
      setError("")
      setTotalPages(data.totalPages)
      setPage(data.page)
      setLoading(false)
    }
    fetchLaunches()
  }, [year, page, limit])

  return (
    <div
      style={{
        backgroundColor: "#d5f5s3",
        minHeight: "100vh",
        color: "#000",
      }}
    >
      <Header />
      <Container fluid="sm" className="mt-4">
        <Forms setYear={setYear} setLimit={setLimit} />
        <Pagination total={totalPages} current={page} onPageChange={setPage} />
        <Row className="justify-content-center">
          {error ? (
            <Alert variant="danger">{error}</Alert>
          ) : (
            <LaunchesList docs={data?.docs} loading={loading} />
          )}
        </Row>
      </Container>
    </div>
  )
}

export default App
