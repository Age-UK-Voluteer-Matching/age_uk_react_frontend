import React from 'react';
import { 
  BrowserRouter, 
  Switch,
  Route
} from 'react-router-dom';
import Landing from './components/landing/Landing';
import Navbar from './components/layouts/Navbar'

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' component={Landing}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;