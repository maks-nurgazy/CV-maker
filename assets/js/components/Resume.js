import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Profile from "./Profile";

export default function Resume() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth={"md"}>
                <Profile />
            </Container>
        </React.Fragment>
    );
}