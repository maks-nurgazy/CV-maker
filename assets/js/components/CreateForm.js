import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import useInputState from '../hooks/useInputState';

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

const useStyles = makeStyles(() => ({

  root: {
    flexGrow: 1,
    marginTop: '20px',
  },

}));

export default function CreateForm() {
  const classes = useStyles();

  const [firstName, updateFirstName] = useInputState('');
  const [lastName, updateLastName] = useInputState('');
  const [email, updateEmail] = useInputState('');
  const [phone, updatePhone] = useInputState('');
  const [address, updateAddress] = useInputState('');
  const [jobTitle, updateJobTitle] = useInputState('');
  const [typeOfEmployment, setTypeOfEmployment] = useInputState('1');

  const [birthday, setBirthday] = useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setBirthday(date);
  };

  return (
      <div className={classes.root}>
          <Container maxWidth="md">
              <form noValidate autoComplete="off">
                  <Grid container spacing={1}>
                      <Grid item sm={6} xs={12}>
                          <TextField
                            id="outlined-basic"
                            label="Имя"
                            value={firstName}
                            onChange={updateFirstName}
                            variant="outlined"
                            fullWidth
                          />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                          <TextField
                            id="outlined-basic"
                            label="Фамилия"
                            value={lastName}
                            onChange={updateLastName}
                            variant="outlined"
                            fullWidth
                          />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                          <TextField
                            margin="normal"
                            type="tel"
                            id="outlined-basic"
                            label="Номер телефона"
                            value={phone}
                            onChange={updatePhone}
                            variant="outlined"
                            fullWidth
                          />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                              <KeyboardDatePicker
                                fullWidth
                                margin="normal"
                                id="date-picker-dialog"
                                label="День рождения"
                                format="MM/dd/yyyy"
                                value={birthday}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                  'aria-label': 'change date',
                                }}
                              />
                          </MuiPickersUtilsProvider>
                      </Grid>
                      <Grid item md={12} xs={12}>
                          <TextField
                            margin="normal"
                            type="email"
                            value={email}
                            onChange={updateEmail}
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            fullWidth
                          />
                      </Grid>
                      <Grid item md={12} xs={12}>
                          <TextField
                            margin="normal"
                            id="outlined-basic"
                            label="Адрес"
                            value={address}
                            onChange={updateAddress}
                            variant="outlined"
                            fullWidth
                          />
                      </Grid>
                      <Grid item sm={12} xs={12}>
                          <TextField
                            margin="normal"
                            id="outlined-basic"
                            label="Желаемая должность"
                            value={jobTitle}
                            onChange={updateJobTitle}
                            variant="outlined"
                            fullWidth
                          />
                      </Grid>
                      <Grid item md={12} xs={12}>
                          <TextField
                            margin="normal"
                            id="outlined-select-type-of-employment"
                            select
                            label="Тип занятости"
                            value={typeOfEmployment}
                            onChange={setTypeOfEmployment}
                            variant="outlined"
                            fullWidth
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
