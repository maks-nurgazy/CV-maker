import React from 'react';
import ReactDOM from 'react-dom';
import CVmakerContextProvider from "./contexts/CVmakerContext";
import Drawer from "./components/Drawer";
import Resume from "./components/Resume";

function App(props) {
    return (
        <CVmakerContextProvider>
            <Drawer />
        </CVmakerContextProvider>
    )
}


ReactDOM.render(<App/>, document.getElementById("root"));

