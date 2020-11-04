import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';

const currencies = [
    {
        value: '1',
        label: 'не имеет значения',
    },
    {
        value: '2',
        label: 'полный рабочий день',
    },
    {
        value: '3',
        label: 'неполный рабочий день',
    },
    {
        value: '4',
        label: 'частичная занятость / совмещение',
    },
    {
        value: '5',
        label: 'удаленная работа / freelance',
    },
];

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        marginTop: '20px',
        // '& .MuiTextField-root': {
        //     margin: theme.spacing(1)
        // },


    },


}));


export default function CreateForm() {
    const classes = useStyles();

    const [currency, setCurrency] = React.useState('1');
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <form noValidate autoComplete="off">
                    <Grid container spacing={1}>
                        <Grid item sm={6} xs={12}>
                            <TextField id="outlined-basic" label="Имя" variant="outlined" fullWidth={true}/>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField id="outlined-basic" label="Фамилия" variant="outlined" fullWidth={true}/>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField margin={"normal"} type="tel" id="outlined-basic" label="Номер телефона"
                                       variant="outlined" fullWidth={true}/>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    fullWidth={true}
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="День рождения"
                                    format="MM/dd/yyyy"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <TextField margin={"normal"} type="email" id="outlined-basic" label="Email"
                                       variant="outlined" fullWidth={true}/>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <TextField margin={"normal"} id="outlined-basic" label="Адрес" variant="outlined"
                                       fullWidth={true}/>
                        </Grid>
                        <Grid item sm={12} xs={12}>
                            <TextField margin={"normal"} id="outlined-basic" label="Желаемая должность"
                                       variant="outlined" fullWidth={true}/>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <TextField
                                margin="normal"
                                id="outlined-select-type-of-employment"
                                select
                                label="Тип занятости"
                                value={currency}
                                onChange={handleChange}
                                variant="outlined"
                                fullWidth={true}
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    );
}
