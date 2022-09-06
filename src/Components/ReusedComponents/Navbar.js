import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/header-logo.png';
import { useSelector } from "react-redux";
const Navbar = () => {
    const getData = useSelector((state) => state.shop.cart)
    return (
        <div style={{ border: "1px solid #eee" }}>
            <nav className="navbar navbar-expand-lg navbar-dark static-top">
                <Link className="navbar-brand " to="/"><img src={logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products

                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">AboutUs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">ContactUs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart<i className="ui cart icon fs-5"></i><span style={{ height: "20px", width: '20px' }} className="position-absolute translate-middle text-center bg-dark border rounded-circle">
                                <span className="text-white float-none align-text-top" style={{ fontSize: "12px" }}>{getData.length}</span>
                            </span></Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    );
}

export default Navbar;