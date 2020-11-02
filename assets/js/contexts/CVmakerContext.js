import React, {Component, createContext} from 'react';

export const CVmakerContext = createContext();

class CVmakerContextProvider extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
             resumes : [{
                image: "images/maks.jpg",
                jobTitle: "Intern PHP",
                firstName: "Maksatbek",
                lastName: "Bolushov",
                email: "maksatbek.bolushov@gmail.com",
                address: "Bishkek",
                stackTechnologies: ["PHP", "Symfony", "JavaScript", "ReactJS"],
                birthday: "16.04.1999",
                experience: "Growave software company",
                typeOfEmployment: "совмещение"
            }],
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