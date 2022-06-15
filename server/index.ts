import axios, { AxiosResponse } from "axios"
import express from "express"
import cors from "cors"

const app = express()

interface lauchesInterface {
  id: string
  rocket: string
  date: string
  success: boolean
  date_utc: string
}

interface paginatedQuery {
  docs: lauchesInterface[]
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

const corsOptions = {
  origin: "http://localhost:7777",
  optionsSuccessStatus: 200, // some legacy browsers choke on 204
}

app.use(cors(corsOptions))

app.get("/", async (req, res): Promise<void> => {
  res.setHeader("Access-Control-Allow-Origin", "*")

  const SPACEX_LAUNCHES_ENDPOINT =
    "https://api.spacexdata.com/v4/launches/query"

  try {
    if (Object.keys(req.query).length === 0 || !Boolean(req.query.year)) {
      const allLaunchesQuery: AxiosResponse<paginatedQuery> = await axios.post(
        SPACEX_LAUNCHES_ENDPOINT,
        {
          query: {},
          options: {
            limit: req.query.limit || 10,
            page: req.query.page || 1,
            sort: {
              date_utc: "asc",
            },
          },
        }
      )

      res.status(200).send({ data: allLaunchesQuery.data })
      return
    }

    if (req.query.singleYear && Boolean(req.query.year)) {
      const year = req.query.year
      const singleYearQuery: AxiosResponse<paginatedQuery> = await axios.post(
        SPACEX_LAUNCHES_ENDPOINT,
        {
          query: {
            date_utc: {
              $gte: `${year}-01-01T00:00:00.000Z`,
              $lte: `${year}-12-31T00:00:00.000Z`,
            },
          },
          options: {
            limit: req.query.limit || 10,
            page: req.query.page || 1,
            sort: {
              date_utc: "asc",
            },
          },
        }
      )

      // Just for the record - the MongoDb errors are not returned
      // query as {"Date" : ISODate("2019aaaaa-08-31T00:00:00.000+0000")}
      // returns 200 code
      // console.log(singleYearQuery)
      // console.log(singleYearQuery.status)

      res.status(200).send({ data: singleYearQuery.data })
      return
    }
    res.status(404).send("Query bad formatted")
    return
  } catch (e) {
    res.status(500).send("API call not reachable")
  }
})

app.listen(8888, () => {
  // eslint-disable-next-line no-console
  console.log("Server is up in port 8888")
})
