import { useState, useEffect } from "react"
import { Alert, Row } from "react-bootstrap"
import Pagination from "react-responsive-pagination"
import { Forms, LaunchesList } from "./"
import fetchdata, { paginatedQuery } from "../utils/fetchdata"
import "./pagination.css"

const LaunchesControl: React.FunctionComponent = () => {
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
    <>
      <Forms setYear={setYear} setLimit={setLimit} />
      <Pagination total={totalPages} current={page} onPageChange={setPage} />
      <Row className="justify-content-center">
        {error ? (
          <Alert variant="danger">{error}</Alert>
        ) : (
          <LaunchesList docs={data?.docs} loading={loading} />
        )}
      </Row>
    </>
  )
}

export default LaunchesControl
