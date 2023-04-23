import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "./tempimage.jpg";
import axios from "axios";
import "./animalCard.css";
import { Link } from "react-router-dom";

function AnimalCard(props) {
    let type = props.type;
    let button_type = false;
    //true=mypost
    //false=animalpage
    if (type === "mypost") {
        button_type = true;
    }

    async function deletePost(id) {
        console.log(id);
        axios
            .post(`${process.env.REACT_APP_URL}/deletepost/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    console.log("here");
                    window.location.href = "/myposts";
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <Card style={{ width: "22rem" }}>
            <Link to={`/petInfo/${props.details.id}`}>
                <Card.Img variant="top" src={props.details.petimage} />
            </Link>
            <Card.Body>
                <Card.Title>{props.details.petname}</Card.Title>
                <Card.Text style={{ textTransform: "capitalize" }}>
                    {props.details.petcategory}
                </Card.Text>
                <Card.Text>{props.details.description}</Card.Text>
                <Card.Text>
                    Location: {props.details.petcity}, {props.details.petstate}
                </Card.Text>
                <Card.Text>{props.details.petcountry}</Card.Text>
                {button_type ? (
                    <Button
                        onClick={() => deletePost(props.details.id)}
                        id="deletebutton"
                        variant="primary"
                    >
                        Delete
                    </Button>
                ) : (
                    <Link to={`/petInfo/${props.details.id}`}>
                        <Button variant="primary">More Info</Button>
                    </Link>
                )}
            </Card.Body>
        </Card>
    );
}

export default AnimalCard;
