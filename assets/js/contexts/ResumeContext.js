import React, { Component, createContext } from 'react';
import axios from 'axios';

export const ResumeContext = createContext();

class CVmakerContextProvider extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      resumes: [],
    };
  }

    // create
    createCV = () => {

    };

    // read
    readCV = () => {
      axios.get('/api/resume/read')
        .then((response) => {
          this.setState({
            resumes: response.data,
          });
        }).catch((error) => {
          console.log(error);
        });
    };
    // update

    // delete

    render() {
      return (
          <ResumeContext.Provider value={{
            ...this.state,
            createCV: this.createCV,
            readCV: this.readCV(),
          }}
          >
              {this.props.children}
          </ResumeContext.Provider>
      );
    }
}

export default CVmakerContextProvider;
