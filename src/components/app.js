import React, { Component } from 'react';
import Footer from '../containers/footer'
import Header from '../containers/header'


export default class App extends Component {
  render() {
    return (
        <div>
          <Header/>
              {this.props.children}
          <Footer/>
        </div>
    );
  }
}
