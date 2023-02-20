import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';


function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route path='/' exact>
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
