import React from 'react';
import ReactDOM from 'react-dom';
import CVmakerContextProvider from "./contexts/CVmakerContext";

function App(props) {
    return (
        <CVmakerContextProvider>
            <h1>Hello Mir</h1>
        </CVmakerContextProvider>
    )
}


ReactDOM.render(<App/>, document.getElementById("root"));

