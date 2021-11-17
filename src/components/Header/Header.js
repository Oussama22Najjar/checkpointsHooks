import { Navbar, Container, Nav } from "react-bootstrap";
import AddMovie  from "../AddMovie/AddMovie";

const Header = ({ addMovie }) => {
const getSearchTerm = () =>{
  props.searchkeyword(inputEl.current.value);
};
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
      <div className="ui search">
        <div className="ui icon input">
          <input ref={inputEl} type="text" placeholder="search movies"
           className="prompt" value={props.term} onChange={ getSearchTerm}/>
        <i className="search icon"></i>
        </div>
        </div>
</div>
)
}
export default Header;