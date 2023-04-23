import React, { useState, useEffect } from "react";
import AnimalCard from "../../components/animalCard";
import axios from "axios";
import Header from "../../header";
import "./displayPage.css";
import ReactPaginate from "react-paginate";

function AnimalPage(props) {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    //-----------------------------SEARCHING---------------------------------------------
    let search = false;
    if (props.animal === "search") {
        search = true;
    }
    async function fetchSearchData() {
        axios
            .get(
                `${process.env.REACT_APP_URL}/searchResults/${props.searchQuery}`
            )
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

    //----------------------REGULAR ANIMAL PAGE QUERY-----------------------------------
    let category =
        props.animal.charAt(0).toUpperCase() + props.animal.slice(1) + "s";
    if (props.animal === "fish" || props.animal === "other") {
        category = props.animal.charAt(0).toUpperCase() + props.animal.slice(1);
    }
    async function fetchData() {
        // axios is a 3rd-party module for fetching data from servers
        axios
            .get(`${process.env.REACT_APP_URL}/pets/${props.animal}`)
            .then((res) => {
                if (res.status === 200) {
                    setData(res.data);
                }
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }

    //------------------------------------------------------------------------------
    useEffect(() => {
        if (search === true) {
            fetchSearchData();
        } else {
            fetchData();
        }
        // the blank array below causes this callback to be executed only once on component load
    }, []);

    const PER_PAGE = 10;
    const offset = currentPage * PER_PAGE;
    const currentPageData = data
        .slice(offset, offset + PER_PAGE)
        .map((item) => (
            <AnimalCard key={item.id} details={item} type="animalPage" />
        ));
    const pageCount = Math.ceil(data.length / PER_PAGE);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    return (
        <div>
            <Header />
            <div id="headingBox">
                {search ? (
                    <h1 id="heading">Search Results</h1>
                ) : (
                    <h1 id="heading">{category} For Sale</h1>
                )}
            </div>
            {/* <section id="animalCard">
                {data.map((item) => (
                    <AnimalCard
                        key={item.id}
                        details={item}
                        type="animalPage"
                    />
                ))}
            </section> */}
            <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />
            <section id="animalCard">{currentPageData}</section>
        </div>
    );
}
export default AnimalPage;
