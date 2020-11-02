import React, {useContext} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Profile from "./Profile";
import {CVmakerContext} from "../contexts/CVmakerContext";
import { v4 as uuid } from 'uuid';

export default function Resume() {

    const context = useContext(CVmakerContext);

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth={"md"}>
                {
                    context.resumes.map(profile => (
                        <Profile key={uuid()} profile = {profile} />
                    ))
                }
            </Container>
        </React.Fragment>
    );
}