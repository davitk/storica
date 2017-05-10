import React, { Component } from 'react';


export default class Contact extends Component {
    render(){
        return (
            <section className="contact">
               <div className="container-fluid">
                   <div className="row">
                       <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 map-view" id="map">
                       </div>
                       <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 contact-details">
                            <div className="contact-info">
                                <h1>Contacts</h1>
                                <h5>ADDRESS</h5>
                                <p>2/1 Melik Adamyan Street,<br /> 0001 Yerevan, Armenia</p>
                                <h5>PHONE</h5>
                                <p>Tel: +374 55 26 37 26</p>
                                <h5>EMAIL</h5>
                                <p>info@storica.am</p>
                            </div>
                       </div>
                   </div>
               </div>
            </section>
        );
    }
}
