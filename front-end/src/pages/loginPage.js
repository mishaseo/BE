import "./loginPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../header";
import { useEffect, useState } from "react";
import image from "./img_1.jpg";
import axios from "axios";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [response, setResponse] = useState({});

    const onSubmit = (event) => {
        event.preventDefault();

        const data = {
            email: email,
            password: password,
        };

        if (email && password) {
            axios
                .post(`${process.env.REACT_APP_URL}/login`, data)
                .then((res) => {
                    if (res.data.success === true) {
                        localStorage.setItem("token", res.data.token);
                        console.log(localStorage);
                        window.location.href = "/";
                    }
                })
                .catch((err) => {
                    //if error 401 is returned
                    if (err.response.status === 401) {
                        alert("Invalid email or password. Please try again!");
                    }
                });
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
            <Form id="loginForm" onSubmit={onSubmit}>
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
                        value={password}
                        placeholder="Password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
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
