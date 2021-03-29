import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "320px",
    },
    mainWrapp: {
        width: "100% !important",
        margin: "0 !important",
        justifyContent: "center",
        textAlign: "left"
    },
    paper: {
        padding: "15px",
        background: "#E7B12B",
        color: "white"
    }

}));

export const Experience = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.mainWrapp}>
            <Grid item className={classes.root}>
                <Paper className={classes.paper}>
                    <p>2020 → present time</p>
                    <h4>Quardex</h4>
                    <p> Project Manager</p>
                    <p>Duties:</p>
                    <p>Task tracking. Project supporting. Task planning. Speaking with clients.</p>
                    <p>Achievements:</p>
                    <p> When working as PM, I saw projects on React.js, Vue.js. Some of the projects
                        were with "Strapi" and "Gatsby.js". On one project, I helped to connect some data
                        from Strapi to React.js front (because the dev of this
                        project leave the company and we need to end this part of work).
                        On some projects, we have an Amazon AWS system. With another PM we tried
                        to help our client with domains and etc. </p>
                </Paper>
            </Grid>
            <Grid item className={classes.root}>
                <Paper className={classes.paper}>
                    <p> 2018-2020</p>
                    <h4>SREDA Digital</h4>
                    <p>Sales manager</p>
                    <p> Duties:</p>
                    <p>Processing incoming requests
                        Drawing up a commercial proposal in different formats (depending on the requirements
                        and wishes of the client). Setting and checking tasks for Pre-sale. After the conclusion
                        of the contract and receipt of funds, the transfer of the client in the
                        "production" to an account manager.</p>
                    <p> Achievements:</p>
                    <p> Participated in the development of a new type of personalized commercial offers.
                        Participated in the development and preparation of regulations in the sales department.
                        Participated in testing strategies, where it was necessary to "raise" sites, constantly change
                        landing pages, set up domains, and so on.
                        In parallel, I managed a team of 5 people (2 copywriters, SEO specialist, PPC-specialist,
                        developer)
                        on a lead generation project. </p>
                </Paper>
            </Grid>
            <Grid item className={classes.root}>
                <Paper className={classes.paper}>
                    <p>
                        2017-2018
                    </p>
                    <h4> Juergen</h4>
                    <p>Design Engineer </p>
                    <p> Development of 3D models, preparation of files for machine tools
                        (layout of parts on standard sheets of material)
                    </p>
                </Paper>
            </Grid>
            <Grid item className={classes.root}>
                <Paper className={classes.paper}>
                    <p>
                        2016-2017
                    </p>
                    <h4> UBC Group</h4>
                    <p>Design Engineer</p>
                    <p> Development of design documentation. Development of 3D models
                        and drawings of parts and equipment in general. Product support from design
                        to implementation (field supervision).
                    </p>
                </Paper>
            </Grid>
        </Grid>
    )
}