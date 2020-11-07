import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ResumeContext = createContext();

export default function CVmakerContextProvider(props) {
  const [resumes, setResumes] = useState([]);

  // create
  const createCV = () => {

  };

  // read
  const readCV = () => {
    axios.get('/api/resume/read')
      .then((response) => {
        setResumes(response.data);
      }).catch((error) => {
        console.log(error);
      });
  };
    // update

  // delete

  return (
      <ResumeContext.Provider value={{
        resumes,
        createCV,
        readCV,
      }}
      >
          {props.children}
      </ResumeContext.Provider>
  );
}
