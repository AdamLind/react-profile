import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio.",
            isLoading: false,
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return (<PortfolioItem key={item.id} item={item} />);
        });
    }
    
    getPortfolioItems() {
        // Make a request for a user with a given ID
        axios
          .get('https://adamsplind.devcamp.space/portfolio/portfolio_items')
          .then(response => {
            // handle success
            console.log("response data", response);
            this.setState({
                data: response.data.portfolio_items
            });
          })
          .catch(error => {
            // handle error
            console.log(error);
          });
      }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something Else"
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading == true) {
            return ("Loading...")
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>

                {this.portfolioItems()}
            </div>
        );
    }
}