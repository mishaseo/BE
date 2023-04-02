import React, { useState, useEffect } from "react";
import AnimalCard from "../../components/animalCard";
import axios from "axios";
import Header from "../../header";
import "./petInfoPage.css";
import { useLocation } from "react-router-dom";
import Image from "react-bootstrap/Image";
import image from "../../components/tempimage.jpg";

function PetInfoPage() {
    const { details } = useLocation().state;
    console.log(details);

    return (
        <div>
            <Header />
            <div id="image">
                <Image
                    src={details.petimage}
                    roundedCircle
                    border="5px solid black"
                    height="300"
                    width="300"
                />
            </div>
            <div id="headingBox">
                <h1 id="heading">{details.petname}</h1>
            </div>
            <div id="border">
                <div>
                    <h3>Pet Description</h3>
                    <p>{details.description}</p>
                </div>
                <div>
                    <h3>Location</h3>
                    <p>
                        {details.petcity} ,{details.petstate}
                        <br></br>
                        {details.petcountry}
                    </p>
                </div>
                <div>
                    <h3>Contact Info</h3>
                    <p>Want to learn more about {details.petname}?</p>
                    <p>Contact at: </p>
                    <p>{details.contact}</p>
                </div>
            </div>
        </div>
    );
}
export default PetInfoPage;
