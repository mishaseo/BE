import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./uploadImage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function UploadImage(props) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { info } = useLocation().state;
    console.log("here", info.petId);
    const jwtToken = localStorage.getItem("token");

    //Create a timeout function which will be used while loading data to database
    function timeout(delay) {
        return new Promise((res) => setTimeout(res, delay));
    }

    //Handle save
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", selectedImage);
        console.log(formData);
        axios.post(
            `${process.env.REACT_APP_URL}/uploadPetImage/${info.petId}`,
            formData,
            {
                headers: { Authorization: `JWT ${jwtToken}` }, // pass the token, if any, to the server
            }
        );

        setLoading(true);
        await timeout(3000);
        navigate("/myposts");
    };

    return (
        <div id="changeImage">
            <h1>Add An Image Of Your Pet!</h1>
            {selectedImage && (
                <div>
                    <img
                        alt="not found"
                        width={"150px"}
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>
                        Remove
                    </button>
                </div>
            )}
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                    }}
                />
                <input type="submit" value="Save" />
            </form>
            <br></br>

            <div id="saving">
                <div className="saving">{loading ? "Saving..." : ""}</div>
            </div>
        </div>
    );
}

export default UploadImage;
