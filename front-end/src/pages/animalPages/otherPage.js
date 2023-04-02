import React, { useState, useEffect } from "react";
import AnimalCard from "../../components/animalCard";
import axios from "axios";
import Header from "../../header";
import "./displayPage.css";
import AnimalPage from "./animalPage";

function OtherPage() {
    return <AnimalPage animal="other" />;
}

export default OtherPage;
