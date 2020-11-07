import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ResumeContext = createContext();

export default function ResumeContextProvider(props) {
  const [resumes, setResumes] = useState([]);

  const createCV = (data) => {
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    axios.post('https://127.0.0.1:8000/api/resume/post', data, config)
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => alert('File Upload Error'));
  };

  const readCV = () => {
    axios.get('/api/resume/read')
      .then((response) => {
        setResumes(response.data);
      }).catch((error) => {
        console.log(error);
      });
  };

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
