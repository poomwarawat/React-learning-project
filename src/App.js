import React from 'react';
import Header from './components/layouts/Header'
import {Route} from 'react-router-dom'
import Home from './page/Home'
import Users from './page/Users'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Route path="/" component={Home} exact></Route>
        <Route path="/users" component={Users}></Route>
      </div>
    </div>
  );
}

export default App;
