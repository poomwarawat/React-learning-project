import React from 'react';
import Header from './components/layouts/Header'
import {Route} from 'react-router-dom'
import Home from './page/Home'
import Photo from './page/Photo'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Route path="/" component={Home} exact></Route>
        <Route path="/photo" component={Photo}></Route>
      </div>
    </div>
  );
}

export default App;
