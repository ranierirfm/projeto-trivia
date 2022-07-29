import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route patch="/" exact component={ Login } />
          <Route patch="/carteira" component={ Wallet } />
        </Switch>

      </div>
    );
  }
}

export default App;
