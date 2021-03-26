import React from "react"
import {AboutMe} from "./AboutMe/AboutMe";
import Me from "../Assets/Me.png"
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";
import {Skills} from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "center"
    },
    avatarWrap: {
        textAlign: "center"
    },
    avatar: {
        maxWidth: "500px",
        width: "100%",
    },
    aboutMe: {
        maxWidth: "500px",
        textAlign: "center"
    },
    contacts: {
        maxWidth: "400px"
    },
    portfolioWrap: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}));

const MainBody = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={5} className={classes.avatarWrap}>
                    <img className={classes.avatar} src={Me} alt="me"/>
                </Grid>
                <Grid item className={classes.aboutMe}>
                    <h1> Yurii Kasko</h1>
                    <h3> Junior front-end developer</h3>
                    <AboutMe/>
                </Grid>
            </Grid>
            <Skills/>
            <div className={classes.portfolioWrap}>
                <div><h2> My projects</h2></div>
                <div><Portfolio/></div>

            </div>

        </div>
    )
}

export default MainBody;