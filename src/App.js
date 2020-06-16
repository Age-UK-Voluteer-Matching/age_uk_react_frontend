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
import SignUp from './components/authentication/SignUp'
import UserInterests from './components/user/UserInterests'
import FindMatch from './components/user/FindMatch'
import UserMatches from './components/user/UserMatches'
import Account from './components/user/Account'

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route path='/signupvolunteer' component={SignUpVolunteer}/>
          <Route path='/signupuser' component={SignUpUser}/>
          <Route path='/login' component={SignIn}/>
          <Route path='/interests' component={UserInterests}/>
          <Route path='/findmatch' component={FindMatch}/>
          <Route path='/matches' component={UserMatches}/>
          <Route path='/account/:id' component={Account}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;