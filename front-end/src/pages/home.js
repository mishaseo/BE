import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import homeTileData from "./homeTileData";
import Header from "../header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1000,
        height: 1000,
    },
    titleBar: {
        background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)",
    },
}));

function Home() {
    const classes = useStyles();
    const [petSearch, setPetSearch] = useState("");

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const petSearchInfo = { info: petSearch };
        navigate("/searchResults", { state: { petSearchInfo } });
    };
    return (
        <div>
            <Header />
            <Form onSubmit={handleSubmit} id="search" className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search for a pet"
                    className="me-2"
                    value={petSearch}
                    aria-label="Search"
                    onChange={(event) => setPetSearch(event.target.value)}
                />

                <Button id="searchButton" variant="outline-success">
                    Search
                </Button>
            </Form>{" "}
            <div id="grid">
                <div className={classes.root}>
                    <GridList
                        cellHeight={400}
                        spacing={30}
                        className={classes.gridList}
                    >
                        <GridListTile
                            key="Subheader"
                            cols={2}
                            style={{ height: "auto" }}
                        >
                            <ListSubheader component="div"></ListSubheader>
                        </GridListTile>
                        {homeTileData.map((tile) => (
                            <GridListTile key={tile.img}>
                                <a href={tile.link}>
                                    <img src={tile.img} alt={tile.title} />
                                </a>
                                <GridListTileBar
                                    title={tile.title}
                                    actionIcon={
                                        <IconButton
                                            aria-label={`info about ${tile.title}`}
                                            className={classes.icon}
                                            href={tile.info}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        </div>
    );
}
export default Home;
