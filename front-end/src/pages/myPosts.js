import React, { useState, useEffect } from "react";
import AnimalCard from "../components/animalCard";
import axios from "axios";
import Header from "../header";
import "./animalPages/displayPage.css";

function MyPosts() {
    const [data, setData] = useState([]);
    const jwtToken = localStorage.getItem("token");

    async function fetchData() {
        // axios is a 3rd-party module for fetching data from servers
        axios
            .get(`${process.env.REACT_APP_URL}/myPosts`, {
                headers: { Authorization: `JWT ${jwtToken}` },
            })
            .then((res) => {
                if (res.status === 200) {
                    console.log("here");
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
            <div id="headingBox">
                <h1 id="heading">My Posts</h1>
            </div>
            <section id="animalCard">
                {data.map((item) => (
                    <AnimalCard key={item.id} details={item} type="mypost" />
                ))}
            </section>
        </div>
    );
}
export default MyPosts;
