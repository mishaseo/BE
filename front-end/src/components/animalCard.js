import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function AnimalCard(props) {
    return (
        <Card style={{ width: "22rem" }}>
            <Card.Img variant="top" src={props.details.image} />
            <Card.Body>
                <Card.Title>{props.details.animalName}</Card.Title>
                <Card.Text>{props.details.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default AnimalCard;
