import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';

import { useHistory } from 'react-router-dom';
import useInputState from '../hooks/useInputState';
import useImageState from '../hooks/useImageState';
import { ResumeContext } from '../contexts/ResumeContext';
import { arrayEmploymentType } from '../utils/constants';

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    marginTop: '20px',
  },
  container: {
    marginBottom: '50px',
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
  },
  avatarImage: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },

}));

export default function CreateForm() {
  const classes = useStyles();
  const context = useContext(ResumeContext);
  const history = useHistory();

  const [firstName, updateFirstName] = useInputState('Maksatbek');
  const [lastName, updateLastName] = useInputState('Bolushov');
  const [email, updateEmail] = useInputState('maksatbek.bolushov');
  const [phone, updatePhone] = useInputState('0777434530');
  const [address, updateAddress] = useInputState('Bishkek');
  const [jobTitle, updateJobTitle] = useInputState('Intern PHP');
  const [typeOfEmployment, setTypeOfEmployment] = useInputState('4');

  const [birthday, setBirthday] = useState(new Date('1999-04-16'));
  const [avatarImage, setAvatarImage, imageUrl] = useImageState('');

  const handleDateChange = (date) => {
    setBirthday(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('avatarImage', avatarImage);
    data.append('firstName', firstName);
    data.append('lastName', lastName);
    data.append('birthday', birthday);
    data.append('email', email);
    data.append('phone', phone);
    data.append('address', address);
    data.append('jobTitle', jobTitle);
    data.append('typeOfEmployment', typeOfEmployment);

    context.createCV(data);

    history.push('/resumes');
  };

  return (
      <div className={classes.root}>
          <Container maxWidth="md" className={classes.container}>
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <Grid container spacing={1}>
                      <Grid item sm={6} xs={12}>
                          <TextField
                            id="outlined-basic"
                            label="Имя"
                            name="first-name"
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
                            name="last-name"
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
                            name="phone"
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
                                name="birthday"
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
                            name="email"
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
                            name="address"
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
                            name="job-title"
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
                            name="type-of-employment"
                            value={typeOfEmployment}
                            onChange={setTypeOfEmployment}
                            variant="outlined"
                            fullWidth
                          >
                              {arrayEmploymentType.map((option) => (
                                  <MenuItem key={option.value} value={option.value}>
                                      {option.label}
                                  </MenuItem>
                              ))}
                          </TextField>
                      </Grid>
                      <Grid item sm={6} xs={12}>
                          <TextField
                            margin="normal"
                            type="file"
                            name="avatar-image"
                            onChange={setAvatarImage}
                            id="outlined-basic"
                            variant="outlined"
                            fullWidth
                          />

                      </Grid>
                      <Grid item sm={6} xs={12}>
                          <div className={classes.avatar}>
                              <Avatar alt="Avatar image" src={imageUrl} className={classes.avatarImage} />
                          </div>
                      </Grid>
                      <Grid item sm={12} xs={12}>
                          <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            type="submit"
                          >
                              Submit
                          </Button>
                      </Grid>
                  </Grid>
              </form>
          </Container>
      </div>
  );
}
