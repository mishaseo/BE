import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./assets/logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function header() {
    return (
        <Navbar bg="light" expand="lg" id="bar">
            <Container>
                <Navbar.Brand href={"/"}>
                    <img src={Logo} height="200" alt="MealHub" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={"/"}>Home</Nav.Link>
                        <Nav.Link href={"/signup"}>Sign Up</Nav.Link>
                        <Nav.Link href={"/createPost"}>Post A Pet</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button id="searchButton" variant="outline-success">
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default header;
