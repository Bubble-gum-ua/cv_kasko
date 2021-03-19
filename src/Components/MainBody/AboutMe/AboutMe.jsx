import React from "react";
import Telegram from "../../Assets/telegram.png";
import Linkdn from "../../Assets/linkdn.png";
import Mail from "../../Assets/mail.png";
import Phone from "../../Assets/telephone.png";
import {Button, makeStyles} from "@material-ui/core";
import Cv_file from "../../Assets/CV_KaskoYurii.pdf";
import {GetApp} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    icons: {
        maxWidth: "30px",
        marginRight: "20px"
    },
    button: {
        color: "white",
        backgroundColor: "blue",
        marginTop: "5px"
    },
    buttonIconWrap: {
        textAlign: "center"
    },
    aboutMeBox: {
        padding: "15px",
        textAlign: "left",
    }
}));

export const AboutMe = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.aboutMeBox}>
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
            </div>
            <div className={classes.buttonIconWrap}>
                <span>
                    <a href="https://t.me/whoisyurii" target="_blank" rel="noreferrer">
                        <img className={classes.icons} src={Telegram} alt="telegram"/>
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/yurii-kasko/" target="_blank" rel="noreferrer">
                        <img className={classes.icons} src={Linkdn} alt="Linkdn"/>
                    </a>
                </span>
                <span>
                    <a href="mailto:hellokasko@gmail.com" target="_blank" rel="noreferrer">
                        <img className={classes.icons} src={Mail} alt="Mail"/>
                    </a>
                </span>
                <span>
                    <a href="tel:+380662562559" target="_blank" rel="noreferrer">
                        <img className={classes.icons} src={Phone} alt="Phone"/>
                    </a>
                </span>
                <div>
                    <Button className={classes.button}
                            startIcon={<GetApp/>}
                            href={Cv_file}
                            target="_blank"
                            download
                    >
                        Download my CV
                    </Button>
                </div>
            </div>
        </div>
    )
}