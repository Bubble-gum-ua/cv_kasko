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
        width: "300px"
    },
    aboutMe: {
        maxWidth: "400px"
    },
    contacts: {
        maxWidth: "400px"
    },
    pageHead: {
        textAlign: "center"
    }

}));

const MainBody = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.pageHead}>
                <h1> Yurii Kasko</h1>
                <h3> Junior front-end developer</h3>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <img className={classes.avatar} src={Me} alt="me"/>
                </Grid>
                <Grid item className={classes.aboutMe}>
                    <AboutMe/>
                </Grid>
                <Grid item className={classes.contacts}>
                    <Contacts/>
                </Grid>
            </Grid>
        </div>
    )
}

export default MainBody;