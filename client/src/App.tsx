import { Container } from "react-bootstrap"
import { Header } from "./components"
import LaunchesControl from "./components/LaunchesControl"

function App() {
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
        <LaunchesControl />
      </Container>
    </div>
  )
}

export default App
