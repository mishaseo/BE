import React, { useState, useEffect } from "react";
import AnimalCard from "../../components/animalCard";
import axios from "axios";
import Header from "../../header";
import "./displayPage.css";

function AnimalPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        // a nested function that fetches the data
        async function fetchData() {
            // axios is a 3rd-party module for fetching data from servers
            const result = await axios(
                // retrieving some mock data about animals for sale
                "https://api.mockaroo.com/api/f8c6c910?count=100&key=18bea250"
            );
            // set the state variable
            // this will cause a re-render of this component
            setData(result.data);
        }

        // fetch the data!
        fetchData();

        // the blank array below causes this callback to be executed only once on component load
    }, []);
    return (
        <div>
            <Header />
            <div id="headingBox">
                <h1 id="heading">Dogs For Sale</h1>
            </div>
            <section id="animalCard">
                {data.map((item) => (
                    <AnimalCard key={item.id} details={item} />
                ))}
            </section>
        </div>
    );
}
export default AnimalPage;
