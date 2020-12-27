import React, {useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/pages/Homepage/index'
import Pricing from './components/pages/PricingSide'
import Footer from './components/pages/Footer/Footer'
import Sidebar from "./components/Sidebar";
import Navbar from './components/Navbar';
import Feature from './components/pages/FirstFeature/Feature'
import Callouts1 from './components/pages/Callouts/Callouts'
import ScrollToTop from "./components/ScrollToTop";
import DisclaimerPage from "./components/Disclaimer/DisclaimerPage";

function App() {
  return (
    <Router>
    <ScrollToTop/>
    <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/pricing' component={Pricing}/>
        <Route path='/features' component={Feature}/>
        <Route path='/callouts' component={Callouts1} />
        <Route path='/disclaimer' component={DisclaimerPage}/>
      </Switch>
      <Footer/>
      <Sidebar/>
    </Router>
    
  );
}

export default App;
