import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import homeTileData from "./homeTileData";
import Header from "../header";

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

    return (
        <div>
            {" "}
            <Header />
            <div className={classes.root}>
                <GridList
                    cellHeight={300}
                    spacing={30}
                    className={classes.gridList}
                >
                    <GridListTile
                        key="Subheader"
                        cols={4}
                        style={{ height: "auto" }}
                    >
                        <ListSubheader component="div"></ListSubheader>
                    </GridListTile>
                    {homeTileData.map((tile) => (
                        <GridListTile key={tile.img}>
                            <a href="/">
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
    );
}
export default Home;
