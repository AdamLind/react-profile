import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";

import PortfolioDetail from "./portfolio/portfolio-detail";
import NoMatch from "./pages/no-match";
import axios from 'axios';
import NavigationContainer from './navigation/navigation-container';

export default class App extends Component {
  constructor() {
    super();

    this.getPortfolioItems = this.getPortfolioItems.bind(this);
  }
  getPortfolioItems() {
    // Make a request for a user with a given ID
    axios
      .get('https://adamsplind.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        // handle success
        console.log("response data", response);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  render() {
    this.getPortfolioItems();
    return (
      <div className='app'>

        <Router>
          <div>
        <h1>Adam's React Profile</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
