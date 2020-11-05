import React, { useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { v4 as uuid } from 'uuid';
import Profile from './Profile';
import { CVmakerContext } from '../contexts/CVmakerContext';

export default function Resume() {
  const context = useContext(CVmakerContext);

  return (
      <>
          <CssBaseline />
          <Container maxWidth="md">
              {
                    context.resumes.map((profile) => (
                        <Profile key={uuid()} profile={profile} />
                    ))
                }
          </Container>
      </>
  );
}
