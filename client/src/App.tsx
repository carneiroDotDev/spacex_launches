import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import CardComponent, { CardProps } from "./components/Card"
import Header from "./components/Header"

function App() {
  //StrictMode renders components twice (on dev but not production)
  //in order to detect any problems with your code and warn you about
  //them (which can be quite useful).

  const [detail, setDetails] = useState<CardProps>({
    id: "",
    date_utc: "",
    details: "",
    success: true,
    name: "",
  })

  useEffect(() => {
    fetch("http://localhost:8888")
      .then(response => response.json())
      .then(response => {
        console.log(response)
        console.log("done fetch")
        setDetails(response.data.docs[0])
      })
  }, [])

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
        <Row className="justify-content-md-center">
          <CardComponent {...detail} />
          <CardComponent {...detail} />
          <CardComponent {...detail} />
          <CardComponent {...detail} />
          <CardComponent {...detail} />
          <CardComponent {...detail} />
        </Row>
      </Container>
    </div>
  )
}

export default App
