import React, { Component } from 'react';


export default class About extends Component {
    render(){
        return (
            <section>
                <div className="first-image"></div>
                <div className="container text-content">
                    <div className="row">
                        <h1>About Us</h1>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <p>Armenian wine Koor from Highland Cellars has absorbed the centuries-old traditions of wine-producing Armenia and its creators’ love for this land, where, according to Bible, Noah planted the first vine at the foothills of Mount Ararat. The successful launch of Koor wine production has become possible due to several factors: the great desire of its founders - the natives of Armenia and their friends, to preserve the local</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <p>winemaking traditions as well as to contribute to the revival of wine-drinking culture of one of the oldest wine regions in the world; involvement of high-class experts to the production, each of whom was responsible for a particular stage of wine production, star ting from the selection of grapes and the area of its growth to the manufacturing techniques and wine labels design.</p>
                        </div>
                    </div>
                </div>
                <div className="second-image"></div>
                <div className="container text-content">
                    <div className="row">
                        <h1>History</h1>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <p>Favorable climate conditions of the Ararat valley have contributed to the
                                development of winemaking in Armenia since ancient times, while the
                                continental climate of high mountains contributed to the high
                                accumulation of sugar in the grape juice, which made it possible to obtain a unique taste and strength of wines. Even though the historians cannot definitely say when the Armenians began to grow vines and crush the grapes into juice, it is known that the oldest winery found in Armenia is itself over 6,000 years. The secrets and technologies of wine making have been passing to subsequent generations.</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <p>Wine, as an integral part of religious ceremonies and family feasts, became part of the culture. And as a drink of love, it was glorified in the lyrics of the prominent medieval Armenian ashug Nahapet Kuchak. Years spent under the Soviet system changed the culture of wine drinking and general attitude to wine in Armenia. Private wineries were nationalized; Armenia had to grow grapes for the production of strong alcoholic beverages, while the rise of cheap alcoholic drinks in demand was observed throughout Soviet Union.  </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
