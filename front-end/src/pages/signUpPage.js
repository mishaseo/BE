import "./loginPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../header";
import { useEffect, useState } from "react";
import image from "./img_1.jpg";
import axios from "axios";

function SignUpPage() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        //console.log(firstname, lastname, email, password);

        const data = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
        };

        if (firstname && lastname && email && password) {
            axios
                .post(`${process.env.REACT_APP_URL}/signup`, data)
                .then((res) => {
                    if (res.data === "Email already exists") {
                        alert("Email already exists. Please try again!");
                        window.location.href = "/signup";
                    } else if (res.data === "Success") {
                        alert(
                            "Succesfully signed up! Redirecting you to the login page to get started!"
                        );
                        window.location.href = "/login";
                    }
                })
                .catch((err) => {
                    console.log(err.response.data);
                });
        } else {
            console.log("Please enter your details correctly");
        }
    };

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
            <Form onSubmit={onSubmit} id="signUpForm">
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="First Name"
                        value={firstname}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={lastname}
                        placeholder="Last Name"
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
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
