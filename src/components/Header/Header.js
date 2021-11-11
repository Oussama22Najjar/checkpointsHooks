import { Navbar, Container, Nav } from "react-bootstrap";
import AddMovie  from "../AddMovie/AddMovie";

const Header = ({ addMovie }) => {
 return (
   <div>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <AddMovie addMovie={addMovie} />
        </Container>
      </Navbar>
</div>
)
}
export default Header;