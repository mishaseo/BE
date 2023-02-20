import "./loginPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../header";
import { useEffect, useState } from "react";
import image from "./img_1.jpg";

function SignUpPage() {
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
            <Form id="signUpForm">
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="firstname" placeholder="First Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="lastname" placeholder="Last Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="confirmPassword"
                        placeholder="Confirm Password"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br></br>
                <br></br>
                <a href={"/login"} id="href">
                    {" "}
                    Already have an account? Login
                </a>
            </Form>
        </div>
    );
}

export default SignUpPage;
