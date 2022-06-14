import * as React from "react"
import { Container, Navbar } from "react-bootstrap"

// interface IHeaderProps {}

const Header: React.FC = () => (
  <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">SpaceX Launchers displayer</Navbar.Brand>
      </Container>
    </Navbar>
  </>
)

export default Header
