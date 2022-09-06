import React, { useEffect, useState } from "react";
import Navbar from "./ReusedComponents/Navbar";
import Subscribe from "./ReusedComponents/Subscribe";
import Footer from "./ReusedComponents/Footer";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, addToCart, removeToCart } from "../Redux/Actions/Actions";
import { useNavigate } from "react-router-dom";
import api from "../AxiosInstance/api";

const Products = () => {
    const navigate = useNavigate()
    //Getting all the prodcts from json db
    const thisData = useSelector((state) => state.product.products);
    //Getting Cart items to get their ID
    const cartId = useSelector((state) => state.shop.cart);
    //Set the option value 
    const [optionValue, setOptionValue] = useState("");
    //Set the order either asending or dsending
    const [order, setOrder] = useState("");
    const [search, setSearch] = useState(null);
    const [category, setCategory] = useState('all')
    const dispatch = useDispatch();

    //Getting data and sending it to the Action
   
    useEffect(() => {

        const sendData = async () => {
            const myData = await api.get("/posts").catch((err) => console.log(err));
            dispatch(getProducts(myData.data));
            // console.log(myData.data)
        };
        sendData();
    }, [dispatch]);

    //Delete the add to cart item 
    const deleleItem = (id) => {
        dispatch(removeToCart(id));
    };

    //Adding the item into the cart 
    const Add = (e) => {
        dispatch(addToCart(e));
        // console.log(e)
        // console.log(res[e.id].id);
    };
    //Function for Sorting
    const asend = (e, item) => {
        if (optionValue === "asend") {
            const sorted = [...thisData].sort((a, b) => (a.price > b.price ? 1 : -1));
            setOrder(sorted);
        } else if (optionValue === "desend") {
            const sorted = [...thisData].sort((c, d) => (d.price > c.price ? 1 : -1));
            setOrder(sorted);
        } else if (optionValue === "newDate") {
            let sortedCars = thisData.sort(
                (e, f) => Date.parse(e.date) - Date.parse(f.date)
            );
            setOrder(sortedCars);
        }
    };
    const toComponentB = (id, image, Name, price, details) => {
        navigate(`/products/${id}`, { state: { id, Name, price, image, details } });
    };


    // const token = localStorage.getItem('accessToken');
    // if (!token) {
    //   navigate('/Signin')
    // }
    // Checking Whether the product is already in the cart or not
    const res2 = thisData.map((el1) => ({
        id: cartId.some((el2) => el2.id === el1.id),
    }));
    // console.log(check)


    // if you want to be more clever...
    // let res2 = thisData.filter(o1 => cartId.some(o2 => o1.id !== o2.id));
    console.log(res2)
    return (
        <div>
            <Navbar />
            <div className="featured-page mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 mt-5">
                            <div className="section-heading">
                                <h1 className="text-black">Featured Items</h1>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-12 mt-5 mb-3">
                            <div id="filters" className="button-group d-md-flex justify-content-end">
                                <div className="form-md-select w-md-100">
                                    <select className="form-select form-select-md" aria-label=".form-select-sm example" onClick={() => asend()}
                                        onChange={(e) => { const selectOption = e.target.value; setOptionValue(selectOption); }}>
                                        <option>Sort By.....</option>
                                        <option value="asend">Price, Low to High</option>
                                        <option value="desend">Price, High to Low</option>
                                        <option value="newDate">Date, Newer to Older</option>
                                    </select>
                                </div>
                                <div className="search-input">
                                    <input type="text" className="form-control" placeholder="Search Products..." onChange={(e) => setSearch(e.target.value)} />
                                </div>
                                <div className="d-flex justify-content-center mt-2">
                                    <span type='button' className="text-black fw-bolder fs-6 ps-2" onClick={() => setCategory('all')}> All Products</span>
                                    <span type='button' className="text-black fw-bolder fs-6 ps-2" onClick={() => setCategory('necklace')}>Necklace</span>
                                    <span type='button' className="text-black fw-bolder fs-6 ps-2" onClick={() => setCategory('ring')}>Rings</span>
                                    <span type='button' className="text-black fw-bolder fs-6 ps-2" onClick={() => setCategory('earring')}>Earrings</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                {order ? (
                    <div className="container mb-5">
                        <div className="row posts">
                            {order.filter((a) => {
                                return category === 'all' || a.category === category
                            }).filter((val) => {
                                if (search === null) { return val } else
                                    if (
                                        val.Name.toString().toLowerCase().includes(search)
                                        // val.price.toSring().includes(search.toString())
                                    ) {
                                        return val;
                                    } return null
                            }).map((p, id) => (
                                <div key={id} className="col-md-4 d-flex justify-content-center">
                                    <span>
                                        <div className="featured-item m-1">
                                            <span type='button' onClick={() => toComponentB(id, p.image, p.name, p.price, p.details)}>
                                                <img style={{ height: "250px" }} className="img-fluid w-100" src={p.image} alt="" />
                                                <h4 className="fs-5 fw-bolder text-black">{p.Name}</h4>
                                                <h6 className="fs-5 fw-bold ">${p.price}</h6>
                                                <p>{p.date}</p>
                                            </span>
                                            <div className="d-grid gap-2">
                                                <button onClick={res2[id].id ? () => deleleItem(p.id) : () => Add(p)} className={res2[id].id ? "btn btn-danger" : "btn btn-primary"}>
                                                    {res2[id].id ? "Remove from cart" : "Add to cart"}
                                                </button>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        {thisData.length ?
                            <div className="container mb-5">
                                <div className="row posts">
                                    {thisData.filter((a) => {
                                        return category === 'all' || a.category === category
                                    }).filter((val) => {
                                        if (search === null) {
                                            return val;
                                        } else if (
                                            val.Name.toLowerCase().includes(search.toLowerCase())
                                            // val.price.toSring().includes(search.toString())
                                        ) {
                                            return val;
                                        }
                                        return null;
                                    }).map((p, id) => (
                                        <div key={p._id} className="col-md-4 d-flex justify-content-center">
                                            <span>
                                                <div className="featured-item m-1">
                                                    <span type='button' onClick={() => toComponentB(id, p.image, p.name, p.price, p.details)}>
                                                        <img style={{ height: "250px" }} className="img-fluid w-100" src={p.image} alt="" />
                                                        <h4 className="fs-5 fw-bolder text-black">{p.Name}</h4>
                                                        <h6 className="fs-5 fw-bold ">${p.price}</h6>
                                                        <p>{p.date}</p>
                                                    </span >
                                                    <div className="d-grid gap-2">
                                                        <button onClick={res2[id]?.id === true ? () => deleleItem(p.id) : () => Add(p)}
                                                            className={res2[id]?.id === true ? "btn btn-danger" : "btn btn-primary"}>
                                                            {res2[id]?.id === true ? "Remove from cart" : "Add to cart"}
                                                        </button>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            :
                            <div className="d-flex justify-content-center m-5">
                                <div className="spinner-border m-5" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        }
                    </div>
                )}
            </div>
            <Subscribe />
            <Footer />
        </div>
    );
};
export default Products;