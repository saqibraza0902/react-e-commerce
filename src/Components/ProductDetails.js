import React, { useEffect, useState } from 'react';
import Navbar from './ReusedComponents/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import Subscribe from "./ReusedComponents/Subscribe";
import Footer from "./ReusedComponents/Footer";

import { useParams, useLocation } from 'react-router-dom'
import { addToCart, removeToCart } from '../Redux/Actions/Actions';


const ProductDetails = () => {
    const location = useLocation();
    const [data] = useState([location.state])
    const { id } = useParams();
    const dispatch = useDispatch();
    // const getDetails = useSelector((state) => state.product.products)
    const cartId = useSelector((state) => state.shop.cart)
    const res = data.map((el1) => ({
        id: cartId.some((el2) => el2.id === el1.id)
    }))
    useEffect(() => {

    }, [id])

    const Add = (e) => {
        dispatch(addToCart(e))

    }
    const deleleItem = (id) => {
        dispatch(removeToCart(id))
    }
    return (
        <div>
            <Navbar />
            <div className="single-product mt-5 mb-5" >

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h1>Single Product</h1>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="product-slider">
                                <div id="slider" className="flexslider">
                                    <div className="slides">
                                        <div>
                                            <img className="col-md-12 w-100" src={location.state.image} alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" >
                            <div className="right-content">
                                <h4 className="fs-4 fw-bolder text-black">{location.state.Name}</h4>
                                <h6 className="fs-6 fw-bold">${location.state.price}</h6>
                                <p>{location.state.details}</p>
                                <div className='d-flex mt-5'>
                                    <button className={res[0].id === true ? 'btn btn-danger' : 'btn btn-primary'} onClick={res[0].id === true ? () => deleleItem(location.state.id) : () => Add(location.state)} style={{ marginLeft: "15px" }}>{res[0].id === true ? 'Remove from cart' : 'Add to Cart'}</button>
                                </div>
                                <div className="down-content">
                                    <div className="share">
                                        <h6>Share: <span><a href="/"><i className="ui facebook f icon"></i></a><a href="/"><i className="ui linkedin in icon"></i></a><a href="/"><i className="ui twitter icon"></i></a></span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Subscribe />
            <Footer />
        </div>
    )
}

export default ProductDetails