import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        marginTop:'20px'
    },


}));


function handleSubmit() {

}

export default function CreateForm() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <form noValidate autoComplete="off">
                    <Grid container spacing={1}>
                        <Grid item sm={6} xs={12}>
                            <TextField id="outlined-basic" label="Имя" variant="outlined" fullWidth={true} />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField id="outlined-basic" label="Фамилия" variant="outlined" fullWidth={true}/>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <TextField type="email" id="outlined-basic" label="Email" variant="outlined" fullWidth={true}/>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    );
}
