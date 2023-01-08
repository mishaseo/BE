import "./loginPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../header";
import { useEffect, useState } from "react";
import image from "./img_0.jpg";
import Container from "react-bootstrap/esm/Container";

function LoginPage() {
    return (
        <div
            style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100vw",
                height: "100vh",
            }}
        >
            <Header />
            <Form id="loginForm">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br></br>
                <br></br>
                <a href={"/signUp"} id="href">
                    {" "}
                    New user? Sign up
                </a>
            </Form>
        </div>
    );
}

export default LoginPage;
