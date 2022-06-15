import { CardProps } from "../components/Card"

export interface paginatedQuery {
  docs: CardProps[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}

export default async function fetchdata(
  year?: string,
  page = 1,
  limit = "10"
): Promise<paginatedQuery> {
  const url = year
    ? `http://localhost:8888?singleYear=1&year=${year}&page=${page}&limit=${limit}`
    : `http://localhost:8888?page=${page}&limit=${limit}`
  const res = await fetch(url)
  const json = await res.json()
  return json.data
}
