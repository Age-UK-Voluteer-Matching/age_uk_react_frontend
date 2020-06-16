import React from 'react';
import { 
  BrowserRouter, 
  Switch,
  Route
} from 'react-router-dom';
import Landing from './components/landing/Landing';
import Navbar from './components/layouts/Navbar'
import SignUpVolunteer from './components/authentication/SignUpVolunteer'
import SignUpUser from './components/authentication/SignUpUser'

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' component={Landing}/>
          <Route path='/singupvolunteer' component={SignUpUser}/>
          <Route path='/signupuser' component={SignUpVolunteer}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;