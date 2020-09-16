import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import ProductIndex from './pages/ProductIndex';
import Header from './pages/Header';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={ProductIndex}/>
          <Route path="/product" component={ProductIndex}/>
          <Route path="/dalton-shell" component={Product}/>
          <Route path="/park-avenue" component={Header}/>
          <Route path="/obsern-sneaker" component={Contact}/>
          <Route path=":productID" component={ProductDetails}/>
          {/* <Route path="*" component={NotFound}/> */}
        </div>
      </Router>
    );
  }
}

export default App;
