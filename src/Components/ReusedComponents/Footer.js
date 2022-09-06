import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/header-logo.png';
const Footer = () => {
    return (
        <div>
            <div className="footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="footer-menu">
                                <ul className=" d-flex justify-content-center text-uppercase">
                                    <li className="list-group-item border-0"><Link to="/">Home</Link></li>
                                    <li className="list-group-item border-0"><a href="/">Help</a></li>
                                    <li className="list-group-item border-0"><a href="/">Privacy Policy</a></li>
                                    <li className="list-group-item border-0"><a href="/">How It Works ?</a></li>
                                    <li className="list-group-item border-0"><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12 mt-2 mb-3">
                            <div className="social-icons ">
                                <ul className="d-flex justify-content-center">
                                    <li className="list-group-item border-0"><a className="d-flex align-item-center" href="https://facebook.com/"><i className="ui facebook f icon"></i></a></li>
                                    <li className="list-group-item border-0"><a href="https://twitter.com/"><i className="ui twitter icon"></i></a></li>
                                    <li className="list-group-item border-0"><a href="https://linkedin.com/"><i className="ui linkedin in icon"></i></a></li>
                                    <li className="list-group-item border-0"><a href="https://linkedin.com/"><i className="ui rss icon"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer Ends Here --> */}


            {/* Sub Footer Starts Here  */}
            <div className="sub-footer text-center" style={{ border: "1px solid #eee" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright-text">
                                <p>Copyright &copy; 2022 PIXIE
                                    - Design By: <Link to="/">Saqib Raza</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer