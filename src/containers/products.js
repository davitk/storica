import React, { Component } from 'react';


export default class Products extends Component {
    render(){
        return (
            <section>
                <div className="product-top-image"></div>
                <div className="container text-content">
                    <div className="row">
                        <h1>Story of Koor</h1>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <p>Armenian wine Koor from Highland Cellars has absorbed the centuries-old traditions of wine-producing Armenia and its creators’ love for this land, where, according to Bible, Noah planted the first vine at the foothills of Mount Ararat. The successful launch of Koor wine production has become possible due to several factors: the great desire of its founders - the natives of Armenia and their friends, to preserve the local</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <p>winemaking traditions as well as to contribute to the revival of wine-drinking culture of one of the oldest wine regions in the world; involvement of high-class experts to the production, each of whom was responsible for a particular stage of wine production, star ting from the selection of grapes and the area of its growth to the manufacturing techniques and wine labels design.</p>
                        </div>
                    </div>
                </div>
                <div className="container all-products">
                    <div className="row">
                        <h2>Products</h2>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                            <div className="single-product">
                                <img src={require('../img/wine-1.png')}  />
                                <h3>KOOR</h3>
                                <p>Reserve</p>
                                <a href=""><button className="more-detail">VIEW DETAILS</button></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                            <div className="single-product">
                                <img src={require('../img/wine-2.png')}  />
                                <h3>KOOR</h3>
                                <p>Dry Red Wine</p>
                                <a href=""><button className="more-detail">VIEW DETAILS</button></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                            <div className="single-product">
                                <img src={require('../img/wine-3.png')}  />
                                <h3>KOOR</h3>
                                <p>Voskehat</p>
                                <a href=""><button className="more-detail">VIEW DETAILS</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="preview-images">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                <div className="preview-1">


                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="preview-2">

                                </div>
                            </div>
                        </div>
                        <div className="row second-row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="preview-3">

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="preview-4">

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="preview-5">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
