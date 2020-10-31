import React from 'react';
import ReactDOM from 'react-dom';
import CVmakerContextProvider from "./contexts/CVmakerContext";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";

function App(props) {
    return (
        <CVmakerContextProvider>
            <Navbar />
            <Resume />
        </CVmakerContextProvider>
    )
}


ReactDOM.render(<App/>, document.getElementById("root"));

