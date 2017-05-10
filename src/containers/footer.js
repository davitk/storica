import React, { Component } from 'react';


export default class Footer extends Component {
    render(){
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4"></div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                            <h5>© 2017. Storica All Rights Reserved</h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 social-links">
                            <a target="_blank" href=""><img src={require('../img/facebook.png')}  /></a>
                            <a target="_blank" href=""><img src={require('../img/linkedin-logo.png')} /></a>
                            <a target="_blank" href=""><img src={require('../img/twitter.png')} /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}