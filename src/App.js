import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Design from './pages/Design'
import Library from './pages/Library'
import Download from './pages/Download'
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';

function App() {
  return (
    <div className="App">
      <Menu/> 
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/design/:name" component={Design}/>
        <Route exact path="/library" component={Library}/>
        <Route exact path="/download" component={Download}/>
      </Switch> 
      <Footer/>
    </div>

  );
}

export default App;
