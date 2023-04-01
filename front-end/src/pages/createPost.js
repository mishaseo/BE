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
    const [petState, setPetState] = useState("");
    const [petCountry, setPetCountry] = useState("");
    const [petCity, setPetCity] = useState("");
    const [contact, setContact] = useState("");
    const [description, setDescription] = useState("");
    const [petCategory, setPetCategory] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    //---------------Form validation--------------------------------
    const jwtToken = localStorage.getItem("token");

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        let newData = {
            petName: petName,
            petCategory: petCategory,
            petAge: petAge,
            petCity: petCity,
            petState: petState,
            petCountry: petCountry,
            contact: contact,
            description: description,
        };

        axios
            // post new post info to server
            .post(`${process.env.REACT_APP_URL}/createPost`, {
                headers: { Authorization: `JWT ${jwtToken}` }, // pass the token, if any, to the server
                newData,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
        //Navigate to the successful post
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
                                //required
                                onChange={(e) =>
                                    setSelectedImage(e.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicSelect">
                            <Form.Label>Select Pet Type</Form.Label>
                            <Form.Control
                                as="select"
                                value={petCategory}
                                required
                                onChange={(e) => {
                                    console.log(
                                        "e.target.value",
                                        e.target.value
                                    );
                                    setPetCategory(e.target.value);
                                }}
                            >
                                <option></option>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="bird">Bird</option>
                                <option value="fish">Fish</option>
                                <option value="rabbit">Rabbit</option>
                                <option value="other">Other</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Pet Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=" Pet Name"
                                value={petName}
                                required
                                onChange={(e) => setPetName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Pet Age</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=" Pet Age"
                                value={petAge}
                                required
                                onChange={(e) => setPetAge(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                value={petCity}
                                placeholder="City"
                                required
                                onChange={(e) => setPetCity(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                value={petState}
                                placeholder=" State"
                                required
                                onChange={(e) => setPetState(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                type="text"
                                value={petCountry}
                                placeholder="Country"
                                required
                                onChange={(e) => setPetCountry(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contact Info</Form.Label>
                            <Form.Control
                                type="text"
                                value={contact}
                                placeholder=" Email, Phone number, etc."
                                required
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description of Pet</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={description}
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
