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
import newsImg from "../../Assets/news.jpg"

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        background: "linear-gradient(45deg, #77b1c1, #b35750)"
    },
    media: {
        height: 140,
    },
    linkToApp: {
        textDecoration: "none",
        color: "white"
    },
    cardWrap: {
        display: "flex",
        justifyContent: "space-around",
        textAlign: "left",
        flexWrap: "wrap"
    }
});

export default function Portfolio() {
    const classes = useStyles();
    const data = [
        {
            id: 1,
            link: 'https://bubble-gum-ua.github.io/weather_app_v2/#/',
            title: 'Weather APP',
            description: 'Used: React, Redux, React-router, Material UI, local storage',
            gh_repo: 'https://github.com/Bubble-gum-ua/weather_app_v2',
            img: weatherImg
        },
        {
            id: 2,
            link: 'https://bubble-gum-ua.github.io/news_feed_app/',
            title: 'News Feed App',
            description: 'Used: React, Redux, React-router, Material UI',
            gh_repo: 'https://github.com/Bubble-gum-ua/news_feed_app',
            img: newsImg
        }
    ]
    let c = data.map((data) => {
        return (
            <Card className={classes.root} key={data.id}>
                <CardActionArea>
                    <a href={data.link}
                       target="_blank"
                       rel="noreferrer"
                       className={classes.linkToApp}
                    >
                        <CardMedia
                            className={classes.media}
                            image={data.img}
                            title={data.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {data.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {data.description}
                            </Typography>
                        </CardContent>
                    </a>
                </CardActionArea>
                <CardActions>
                    <Button>
                        <a href={data.gh_repo}
                           target="_blank"
                           rel="noreferrer"
                           className={classes.linkToApp}
                        >
                            GitHUB repo
                        </a>
                    </Button>
                    <Button size="small" color="primary">
                        <a href={data.link}
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
    })
    return (
        <div className={classes.cardWrap}>
            {c}
        </div>
    )
}
