import React, { Component } from 'react';


export default class Home extends Component {
    render(){
        return (
            <div>
                {/*Top Section*/}
                <section className="home-top">
                    <div className="container">
                        <div className="row">
                           <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                               <h1>History of World Wines</h1>
                           </div>
                           <div className="col-lg-7 col-md-7 col-sm-7"></div>
                        </div>
                    </div>
                </section>
                {/*End Top Section*/}
                {/*Story Of brands*/}
                <div className="container story-of-brands">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h2>The Story of Our Brands</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 brand-col">
                            <a href="">
                                <div className="single-brand highland">
                                    <div className="dimmed"></div>
                                    <h3>Highland</h3>
                                    <img src={require('../img/logo-white.png')}  />
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 brand-col">
                            <a href="">
                                <div className="single-brand keush">
                                    <div className="dimmed"></div>
                                    <h3>Keush</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 brand-col">
                            <a href="">
                                <div className="single-brand kataro">
                                    <div className="dimmed"></div>
                                    <h3>Kataro</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 brand-col">
                            <a href="">
                                <div className="single-brand zabel">
                                    <div className="dimmed"></div>
                                    <h3>Zabel</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 brand-col">
                            <a href="">
                                <div className="single-brand zulal">
                                    <div className="dimmed"></div>
                                    <h3>Zulal</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    </div>
                </div>
                {/*End Story Of brands*/}
                {/*Presentation Section*/}
                <div className="container presentation">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 history">
                            <h2>History</h2>
                            <p>Favorable climate conditions of the Ararat valley have contributed to the development of winemaking in
                                Armenia.</p>
                            <a href="about"><button className="history-button">READ MORE</button></a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 grape">

                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 sun-icon">
                            <img src={require('../img/climate_white.png')}  />
                            <p>Since ancient times, while the continental climate of high mountains
                                contributed to the high
                                accumulation of sugar
                                in the grape juice.
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 koor-teaser">

                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 winnery-icon">
                            <img src={require('../img/cask.png')}  />
                            <p>Even though the historians cannot definitely say when the Armenians
                                began to grow vines and crush the grapes into juice, it is known that the oldest
                                winery found in Armenia is itself over 6,000 years.
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 video-presentation">
                            <img src={require('../img/play-button.png')}  />
                            <p>Video Presentation</p>
                        </div>
                    </div>
                </div>
                {/* End Presentation Section*/}
                {/*Distributors*/}
                <div className="container distribution">
                    <div className="row">
                        <h2>Distribution</h2>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-center">
                            <div className="single-distributor">
                                <img src={require('../img/Armenia.png')}  />
                                <h4>ARMENIA</h4>
                                <h5>Artexim</h5>
                                <a href="">www.noyantun.am</a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-center">
                            <div className="single-distributor">
                                <img src={require('../img/Russia.png')}  />
                                <h4>RUSSIA</h4>
                                <h5>NWC</h5>
                                <a href="">www.newwineco.ru</a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-center">
                            <div className="single-distributor">
                                <img src={require('../img/United-States-of-America.png')}  />
                                <h4>USA</h4>
                                <h5>USA Wine West</h5>
                                <a href="">www.usawinewest.com</a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-center">
                            <div className="single-distributor">
                                <img src={require('../img/Sweden.png')}  />
                                <h4>SWEDEN</h4>
                                <h5>Avec Sweden AB</h5>
                                <a href="">www.avecsweden.se</a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-center">
                            <div className="single-distributor">
                                <img src={require('../img/Japan.png')}  />
                                <h4>JAPAN</h4>
                                <h5>The Ancient World</h5>
                                <a href="">www.ancient-w.com</a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-center">
                            <div className="single-distributor">
                                <img src={require('../img/Australia.png')}  />
                                <h4>UK</h4>
                                <h5>Armenian Wine Importers</h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Distributors*/}
            </div>
        );
    }
}