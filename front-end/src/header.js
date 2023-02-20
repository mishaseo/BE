import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function header() {
    return (
        <Navbar bg="light" expand="lg" id="bar">
            <Container>
                <Navbar.Brand href={"/"}>FetchAPet</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={"/"}>Home</Nav.Link>
                        <Nav.Link href={"/signup"}>Sign Up</Nav.Link>
                        <Nav.Link href={"/createPost"}>Post A Pet</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default header;
