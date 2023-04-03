import React, { useState, useEffect } from "react";
import Header from "../header";
import "./animalPages/displayPage.css";
import AnimalPage from "./animalPages/animalPage";
import { useLocation } from "react-router-dom";

function SearchResults() {
    const { petSearchInfo } = useLocation().state;
    return <AnimalPage animal="search" searchQuery={petSearchInfo.info} />;
}

export default SearchResults;
