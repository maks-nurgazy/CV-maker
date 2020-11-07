import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import ResumeContextProvider from './contexts/ResumeContext';
import ResumeList from './components/ResumeList';
import NotFound from './components/NotFound';
import CreateForm from './components/CreateForm';
import '../styles/app.css';

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Redirect exact from="/" to="/resumes" />
              <Route exact path="/resumes">
                  <ResumeContextProvider>
                      <ResumeList />
                  </ResumeContextProvider>
              </Route>
              <Route exact path="/resumes/create">
                  <ResumeContextProvider><CreateForm /></ResumeContextProvider>
              </Route>
              <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
