import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./assets/logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";

function Header() {
    const jwtToken = localStorage.getItem("token"); // the JWT token, if we have already received one and stored it in localStorage
    //console.log(`JWT token: ${jwtToken}`); // debugging
    const [logged, setLogged] = useState(jwtToken && true);
    const [name, setName] = useState("");
    //FUNCTION TO LOGOUT
    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_URL}/checkLogin`, {
                headers: { Authorization: `JWT ${jwtToken}` }, // pass the token, if any, to the server
            })
            .then((res) => {
                //console.log(res);
                //if we get status 200, then user is signed in
                if (res.data.success === true) {
                    setLogged(true);
                    setName(
                        res.data.user.firstname + " " + res.data.user.lastname
                    );
                } else {
                    setLogged(false);
                }
            })
            .catch((err) => {});
    }, []);

    return (
        <Navbar bg="light" expand="lg" id="bar">
            <Container>
                <Navbar.Brand href={"/"}>
                    <img src={Logo} height="200" alt="MealHub" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"> </Nav>
                    {logged ? (
                        <Nav>
                            <b>
                                <i>
                                    <Nav.Link>Hello {name}! </Nav.Link>
                                </i>
                            </b>
                            <Nav.Link href={"/"}>Home</Nav.Link>
                            <Nav.Link href={"/createPost"}>Post A Pet</Nav.Link>
                            <Nav.Link href={"/myPosts"}>My Posts</Nav.Link>
                            <Nav.Link href="/aboutUs">About Us</Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    logout();
                                }}
                            >
                                <b>Logout</b>
                            </Nav.Link>
                        </Nav>
                    ) : (
                        <Nav>
                            <Nav.Link href={"/"}>Home</Nav.Link>
                            <Nav.Link href={"/signup"}>Sign Up</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/aboutUs">About Us</Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
