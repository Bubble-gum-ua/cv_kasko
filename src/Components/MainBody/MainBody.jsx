import React from "react"
import {AboutMe} from "./AboutMe/AboutMe";
import Me from "../Assets/Me.png"
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";
import {Skills} from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import {Experience} from "./Expirience/Experience";
import {Programs} from "./Programs/Programs";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "center",
        paddingTop: "40px"
    },
    avatarWrap: {
        textAlign: "center"
    },
    avatar: {
        maxWidth: "500px",
        width: "100%",
    },
    aboutMe: {
        maxWidth: "700px",
        textAlign: "center"
    },
    contacts: {
        maxWidth: "400px"
    },
    portfolioWrap: {
        textAlign: "center",
        borderTop: "1px solid white"
    },
    expWrap: {
        textAlign: "center",
        borderTop: "1px solid white",
        marginTop: "10px"
    }
}));

const MainBody = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3} className={classes.root}>
                <Grid item className={classes.avatarWrap}>
                    <img className={classes.avatar} src={Me} alt="me"/>
                </Grid>
                <Grid item className={classes.aboutMe}>
                    <h1> Yurii Kasko</h1>
                    <h3> Junior front-end developer</h3>
                    <AboutMe/>
                </Grid>
            </Grid>
            <Skills/>
            <Programs/>
            <div className={classes.portfolioWrap}>
                <div><h2> My projects</h2></div>
                <div><Portfolio/></div>
            </div>
            <div className={classes.expWrap}>
                <h2>Experience</h2>
                <Experience/>
            </div>
        </div>
    )
}

export default MainBody;