import React from 'react';
import ReactDOM from 'react-dom';
import CVmakerContextProvider from "./contexts/CVmakerContext";
import Drawer from "./components/Drawer";
import {BrowserRouter, Route, Switch,Redirect} from "react-router-dom"
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import '../styles/app.css'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/resumes" />
                <Route exact path="/resumes" component={()=><CVmakerContextProvider><Drawer/></CVmakerContextProvider>}/>
                <Route exact path="/resumes/create" component={Navbar}/>
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}


ReactDOM.render(<App/>, document.getElementById("root"));

