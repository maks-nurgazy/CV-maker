import React from 'react';
import ReactDOM from 'react-dom';
import CVmakerContextProvider from "./contexts/CVmakerContext";
import Drawer from "./components/Drawer";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"
import NotFound from "./components/NotFound";
import CreateForm from "./components/CreateForm";
import '../styles/app.css'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/resumes"/>
                <Route exact path="/resumes"
                       component={() => <CVmakerContextProvider><Drawer/></CVmakerContextProvider>}/>
                <Route exact path="/resumes/create" component={CreateForm}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}


ReactDOM.render(<App/>, document.getElementById("root"));

