import React from "react";
import webstorm from "../../Assets/webstorm.png";
import microsoft from "../../Assets/microsoft.png";
import redmine from "../../Assets/redmine.png";
import slack from "../../Assets/slack.png";
import figma from "../../Assets/figma.png";
import tilda from "../../Assets/tilda.png";
import trello from "../../Assets/trello.png";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    images: {
        maxWidth: "100px"
    },
    teams: {
        maxWidth: "200px"
    },
    skillsHead: {
        textAlign: "center",
        borderTop: "1px solid white",
        marginTop: "10px"
    },
    imagesWrap: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap"
    },
    skillsWrapp: {
        marginBottom: "15px"
    }

}));

export const Programs = () => {
    const classes = useStyles();
    return (
        <div className={classes.skillsWrapp}>
            <div className={classes.skillsHead}>
                <h1>Programs </h1>
            </div>
            <div className={classes.imagesWrap}>
                <span>
                    <img className={classes.images} src={webstorm} alt="webstorm"/>
                </span>
                <span>
                    <img className={classes.teams} src={microsoft} alt="microsoft"/>
                </span>
                <span>
                    <img className={classes.images} src={redmine} alt="redmine"/>
                </span>
                <span>
                    <img className={classes.images} src={slack} alt="slack"/>
                </span>
                <span>
                    <img className={classes.images} src={figma} alt="figma"/>
                </span>
                <span>
                    <img className={classes.images} src={tilda} alt="tilda"/>
                </span>
                <span>
                    <img className={classes.images} src={trello} alt="trello"/>
                </span>
            </div>
        </div>
    )
}