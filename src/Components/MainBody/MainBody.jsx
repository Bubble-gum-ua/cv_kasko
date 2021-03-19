import React from "react"
import {AboutMe} from "./AboutMe/AboutMe";
import Me from "../Assets/Me.png"
import {Contacts} from "./Contacts/Contacts";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    avatar: {
        maxWidth: "500px"
    },
    aboutMe: {
        maxWidth: "400px"
    },
    contacts: {
        maxWidth: "400px"
    },

}));

const MainBody = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <img className={classes.avatar} src={Me} alt="me"/>
                </Grid>
                <Grid item  className={classes.aboutMe}>
                    <h1> Yurii Kasko</h1>
                    <h3> Junior front-end developer</h3>
                    <AboutMe/>
                </Grid>
            </Grid>
            <Contacts/>
        </div>
    )
}

export default MainBody;