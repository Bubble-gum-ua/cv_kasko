import React from "react";
import Telegram from "../../Assets/telegram.png"
import Linkdn from "../../Assets/linkdn.png"
import Mail from "../../Assets/mail.png"
import Phone from "../../Assets/telephone.png"
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    icons: {
        maxWidth: "30px",
        marginRight: "20px"
    },
}));

export const AboutMe = () => {
    const classes = useStyles();
    return (
        <div>
            <h4> About me</h4>
            <p> Hi! </p>
            <p> My name is Yurii. I'm looking for position as a Junior front-end developer. </p>
            <p> As a developer has not yet worked. I study React. I am writing a test
                project of a social network. Where React, Redux is used. And also
                used: redux-form, redux-thunk, react-router, reselect. TypeScript will
                be used shortly.
            </p>
            <p>
                I now work as a Project Manager. Prior to that, worked as a Sales
                Manager.
                There has always been an interesting development. Working as a
                manager, I try to look at the decisions of developers, ask and interested
                in what and why was done.
            </p>
            <p>
                This text was typed with "Grammarly". =)
            </p>
            <div>
                <span>
                    <a href="#">
                        <img className={classes.icons} src={Telegram} alt="telegram"/>
                    </a>
                </span>
                <span>
                    <a href="#">
                        <img className={classes.icons} src={Linkdn} alt="telegram"/>
                    </a>
                </span>
                <span>
                    <a href="#">
                        <img className={classes.icons} src={Mail} alt="telegram"/>
                    </a>
                </span>
                <span>
                    <a href="#">
                        <img className={classes.icons} src={Phone} alt="telegram"/>
                    </a>
                </span>
            </div>
        </div>
    )
}