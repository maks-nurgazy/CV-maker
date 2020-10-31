import React, {Component, createContext} from 'react';

export const CVmakerContext = createContext();

class CVmakerContextProvider extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            resumes : [],
        };
    }

    // create
    createCV = () => {

    };
    // read
    readCV = () => {

    };
    // update

    // delete

    render() {
        return (
            <CVmakerContext.Provider value={{
                ...this.state,
                createCV: this.createCV,
                readCV : this.readCV()
            }}>
                {this.props.children}
            </CVmakerContext.Provider>
        );
    }
}

export default CVmakerContextProvider;