import React, { useState, useEffect } from "react";
import AnimalCard from "../../components/animalCard";
import axios from "axios";
import Header from "../../header";
import "./petInfoPage.css";
import { useLocation } from "react-router-dom";
import Image from "react-bootstrap/Image";
import image from "../../components/tempimage.jpg";
import { Route, Link, Routes, useParams } from "react-router-dom";

function PetInfoPage() {
    const [data, setData] = useState([]);
    const params = useParams();

    async function fetchData() {
        axios
            .get(`${process.env.REACT_APP_URL}/petInfo/${params.petId}`)
            .then((res) => {
                if (res.status === 200) {
                    console.log("search success");
                    setData(res.data);
                }
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }

    useEffect(() => {
        fetchData();

        // the blank array below causes this callback to be executed only once on component load
    }, []);

    return (
        <div>
            <Header />
            <div id="image">
                <Image src={data.petimage} />
            </div>
            <div id="headingBox">
                <h1 id="heading">{data.petname}</h1>
            </div>
            <div id="border">
                <div>
                    <h3>Pet Description</h3>
                    <p>{data.description}</p>
                </div>
                <div>
                    <h3>Location</h3>
                    <p>
                        {data.petcity} ,{data.petstate}
                        <br></br>
                        {data.petcountry}
                    </p>
                </div>
                <div>
                    <h3>Contact Info</h3>
                    <p>Want to learn more about {data.petname}?</p>
                    <p>Contact at: </p>
                    <p>{data.contact}</p>
                </div>
            </div>
        </div>
    );
}
export default PetInfoPage;
