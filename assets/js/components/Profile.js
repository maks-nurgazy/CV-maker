import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import deepOrange from "@material-ui/core/colors/deepOrange";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        marginTop: "5px",
    },
    mainContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        [theme.breakpoints.only('xs')]: {
            flexDirection: "column",
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: "row",
        },
    },
    leftContainer: {
        flex: " 0 1 23%",
        [theme.breakpoints.down('md')]: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        }
    },
    rightContainer: {
        flex: " 0 1 77%",
        marginLeft: "50px"
    },
    profImage: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        width: "100%",
        height: "200px",
        [theme.breakpoints.down('sm')]: {
            width: "200px",
        }
    },
    jobTitle: {
        backgroundColor: "#C4C4C4",
        width: "100%",
        textAlign: "center",
        [theme.breakpoints.up('xs')]: {
            marginTop: "20px",
            backgroundColor: "none"
        }
    },
    name: {
        textAlign: "center",
        marginTop: "-5px",
        fontSize: "1.9rem",
        [theme.breakpoints.down('sm')]: {
            marginTop: "20px",
            textAlign: "left"
        }
    },
    properties: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "24px",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
        }
    },
    title: {
        color: "#A9A9A9",
        marginBottom: "15px",
        '&::after': {
            content: '":"',
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: 0,
        }
    },
    dep: {
        width: "50%",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            marginBottom: "10px"
        }
    },
}));

export default function Profile(props) {
    const classes = useStyles();
    const {image,jobTitle, firstName,lastName,birthday,experience,stackTechnologies,typeOfEmployment} = props.profile;
    return (
        <Card className={classes.root}>
            <CardContent>
                <div className={classes.mainContainer}>
                    <div className={classes.leftContainer}>
                        <Avatar className={classes.profImage} alt="avatar name " src={`images/${image}`}/>
                        <div className={classes.jobTitle}>
                            <h1>{jobTitle}</h1>
                        </div>
                    </div>
                    <div className={classes.rightContainer}>
                        <h2 className={classes.name}>{`${firstName} ${lastName}`}</h2>
                        <div className={classes.properties}>
                            <span className={classes.title}>Год рождения</span>
                            <span className={classes.dep}>{birthday}</span>
                        </div>
                        <div className={classes.properties}>
                            <span className={classes.title}>Стек технологий</span>
                            <span className={classes.dep}>{stackTechnologies.map(e => `${e}✔  `)}</span>
                        </div>
                        <br/>
                        <div className={classes.properties}>
                            <span className={classes.title}>Опыт работы</span>
                            <span className={classes.dep}>{experience}</span>
                        </div>
                        <div className={classes.properties}>
                            <span className={classes.title}>Тип занятости</span>
                            <span className={classes.dep}>{typeOfEmployment}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}