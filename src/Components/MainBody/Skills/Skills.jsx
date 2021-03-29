import React from "react";
import git from "../../Assets/git.png";
import reactIco from "../../Assets/react.png";
import reduxIco from "../../Assets/redux.png";
import ccsHtmlJs from "../../Assets/cssHtml.png";
import material from "../../Assets/material.png"
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    images: {
        maxWidth: "100px"
    },
    cssHtmlJs: {
        maxWidth: "300px"
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

export const Skills = () => {
    const classes = useStyles();
    return (
        <div className={classes.skillsWrapp}>
            <div className={classes.skillsHead}>
                <h1>Technologies stack </h1>
            </div>
            <div className={classes.imagesWrap}>
                <span>
                    <img className={classes.images} src={git} alt="git"/>
                </span>
                <span>
                    <img className={classes.images} src={reactIco} alt="react"/>
                </span>
                <span>
                    <img className={classes.images} src={reduxIco} alt="redux"/>
                </span>
                <span>
                    <img className={classes.cssHtmlJs} src={ccsHtmlJs} alt="cssHtml"/>
                </span>
                <span>
                    <img className={classes.images} src={material} alt="material"/>
                </span>
            </div>
        </div>
    )
}