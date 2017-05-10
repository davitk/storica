import React, {Component} from 'react';

const Active = (pathName)=>{
    let path = location.pathname
    if(pathName == path){
        return "active"
    }
}
export default  class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle">
                            <span></span>
                        </button>
                        <a className="navbar-brand visible-xs" href="/"></a>
                    </div>
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            <li className={Active("/")}>
                                <a href="/">HOME</a>
                            </li>
                            <li  className={Active("/about")} >
                                <a href="about">ABOUT</a>
                            </li>
                            <li className={Active("/")}>
                                <a href="/" className="brand-logo"></a>
                            </li>
                            <li className={["dropdown " + Active("/products")]}>
                                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="products">PRODUCTS</a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="products">HIGHLAND</a>
                                    </li>
                                    <li>
                                        <a href="products">KEUSH</a>
                                    </li>
                                    <li>
                                        <a href="products">KATARO</a>
                                    </li>
                                    <li>
                                        <a href="products">ZABEL</a>
                                    </li>
                                    <li>
                                        <a href="products">ZULAL</a>
                                    </li>
                                </ul>
                            </li>
                            <li className={Active("/contact")}>
                                <a href="contact">CONTACTS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}


Header.contextTypes = {
    router: React.PropTypes.object
};

