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
import SignIn from './components/authentication/SignIn'
import UserInterests from './components/user/UserInterests'

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/signupvolunteer' component={SignUpVolunteer}/>
          <Route path='/signupuser' component={SignUpUser}/>
          <Route path='/login' component={SignIn}/>
          <Route path='/interests' component={UserInterests}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;