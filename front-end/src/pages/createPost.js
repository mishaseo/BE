import "bootstrap/dist/css/bootstrap.min.css";
import "./createPost.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../header";

function CreatePost() {
    const [petName, setPetName] = useState("");
    const [petAge, setPetAge] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [contact, setContact] = useState("");
    const [description, setDescription] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    //---------------Form validation--------------------------------

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        let newData = {
            petName: petName,
            petAge: petAge,
            state: state,
            country: country,
            city: city,
            contact: contact,
            description: description,
        };

        // axios
        //     // post new user info to server
        //     .post(`${process.env.REACT_APP_URL}/editInfo`, newData, {
        //         withCredentials: true,
        //     })
        //     .then((response) => {
        //         console.log(response.data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        navigate("/");
    };

    //---------------------------returning------------------------------
    return (
        <div>
            <div>
                <Header />
                <div id="title">
                    <br></br>
                    <p>Post My Pet</p>
                </div>

                {/*------------------------------Form section------------------------*/}
                <div id="infoEdit">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload Pet Image</Form.Label>
                            <Form.Control
                                type="file"
                                required
                                onChange={(e) =>
                                    setSelectedImage(e.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Pet Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=" Pet Name"
                                required
                                onChange={(e) => setPetName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Pet Age</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=" Pet Age"
                                required
                                onChange={(e) => setPetAge(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="City"
                                required
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=" State"
                                required
                                onChange={(e) => setState(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>County</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=" Country"
                                required
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contact Info</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=" Email, Phone number, etc."
                                required
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description of Pet</Form.Label>
                            <Form.Control
                                as="textarea"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <br></br>
                        <Button type="submit" variant="primary">
                            Post
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;
