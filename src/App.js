// import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import { BrowserRouter, Route , Switch } from "react-router-dom"
// import ProductItem from './components/product/ProductItem';
import Home from './containers/Home';
import Register from './containers/Register';
import NotFound from './containers/error/NotFound';

class App extends Component {

  renderRouter(){
    return(
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/register' component={Register}/>
        <Route component={NotFound} />
      </Switch>
    )
  }

  render(){
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  };
};

export default App;
