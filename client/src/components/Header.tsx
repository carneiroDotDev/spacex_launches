import { Container, Navbar } from "react-bootstrap"

const Header: React.FC = () => (
  <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">SpaceX launch displayer</Navbar.Brand>
      </Container>
    </Navbar>
  </>
)

export default Header
