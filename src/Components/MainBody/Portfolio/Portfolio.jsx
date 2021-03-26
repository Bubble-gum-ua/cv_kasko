import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import weatherImg from "../../Assets/weather.jpg"

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    linkToApp: {
        textDecoration: "none"
    }
});

export default function Portfolio() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <a href="https://bubble-gum-ua.github.io/weather_app_v2/#/"
                   target="_blank"
                   rel="noreferrer"
                   className={classes.linkToApp}
                >
                    <CardMedia
                        className={classes.media}
                        image={weatherImg}
                        title="Weather APP"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Weather APP
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Used: React, Redux, React-router, Material UI, local storage
                        </Typography>
                    </CardContent>
                </a>
            </CardActionArea>
            <CardActions>
                <Button>
                    <a href="https://github.com/Bubble-gum-ua/weather_app_v2"
                       target="_blank"
                       rel="noreferrer"
                       className={classes.linkToApp}
                    >
                        GitHUB repo
                    </a>
                </Button>
                <Button size="small" color="primary">
                    <a href="https://bubble-gum-ua.github.io/weather_app_v2/#/"
                       target="_blank"
                       rel="noreferrer"
                       className={classes.linkToApp}
                    >
                        Learn More
                    </a>
                </Button>
            </CardActions>

        </Card>
    );
}
