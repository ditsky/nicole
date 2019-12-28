import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/MOUTH';
import Appointment from './pages/appointment/Appointment';
import FAQ from './pages/FAQ';
import Header from './Header';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Header> </Header>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/appointments' component={Appointment}/>
          <Route path='/faq' component={FAQ}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
