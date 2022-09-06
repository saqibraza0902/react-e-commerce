import React, { useEffect, useState } from "react";
import Navbar from "./ReusedComponents/Navbar";
import swal from "sweetalert";
import Modal from 'react-bootstrap/Modal';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeToCart, removeOne, removeAll } from "../Redux/Actions/Actions";
import api from "../AxiosInstance/api";

const Cart = () => {
  const navigate = useNavigate()
  const [lgShow, setLgShow] = useState(false);
  const getData = useSelector((state) => state.shop.cart);  //Getting Cart items from reducer
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [province, setProvince] = useState()
  const [address, setAddress] = useState()
  const [msg, setMsg] = useState()

  // const user = JSON.parse(localStorage.getItem('user'));
  // const [name] = useState(user.fname + user.lname)
  // const [email] = useState()

  //Increase the quantity of product
  const Increament = (e) => {
    dispatch(addToCart(e));
    total()
  };
  //Delete the add to cart item 
  const deleleItem = (id) => {
    dispatch(removeToCart(id));
  };

  //Decrease the quantity of product
  const Decreament = (item) => {
    dispatch(removeOne(item));
    total()
  };

  //Calculate the total Price of all products
  const total = () => {
    let price = 0;
    getData.map((ele) => {
      return price = ele.price * ele.quantity + price;

    });
    setPrice(price);
  };

  useEffect(() => {
    total()
  })
  // const token = localStorage.getItem('accessToken');
  // if (!token) {
  //   navigate('/Signin')
  // }
  // const handleLogout = () => {
  //   localStorage.removeItem("accessToken");
  //   localStorage.removeItem("user");
  //   navigate('/Signin')
  // };


  const formik = useFormik({
    initialValues: { name: '', email: '', Number: '', State: '', Address: '', Message: '', },
    onSubmit: function (values, { resetForm }) {
      dispatch(removeAll());
      console.log(name, email, phone, province, address, msg);
      const a = api.post("/order", name, email, phone)
      setLgShow(false)
      swal("Thanks For shopping your order will be delivered in 2-3 working days", {
        buttons: false,
        timer: 6000,
      })
      navigate('/products')
      console.log(`Name: ${values.name} || Email: ${values.email} || Phone No: ${values.Number} || State:${values.State} || Address: ${values.Address} || Message:${values.Message}.`);
      resetForm({ values: '' })
    },

    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Should be 3 character long').max(20, 'should not exceed 20 characters').required('Please Enter Your name'),
      email: Yup.string().email().required('Email is Required'),
      Number: Yup.string().matches(/^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/,
        "Phone number is not valid Pattern must be +92 3** *** ** **").required(),
      State: Yup.string().required('Please Select Your State'),
      Address: Yup.string().required('Enter Your Complete Postal Address'),
      Message: Yup.string().required('Enter Your special Message')
    })
  })
  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Email is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }
  console.log(getData)
  return (
    <div>
      <div style={{ marginBottom: "50px" }}>
        <Navbar />
      </div>
      <h2 className="text-center">This is cart page</h2>
      <div className="container-fluid">
        {getData.length ? (
          <>
            <div className="d-flex justify-content-center">
              <p>Your Total is ${price}. Click&nbsp;
                <span className="text-decoration-underline" type="button" onClick={() => setLgShow(true)}>
                  here
                </span> to proceed
              </p>
              <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
                <form onSubmit={formik.handleSubmit}>
                  <Modal.Header >
                    <strong>Check Out</strong>
                    <strong type='button'  >Cash on delivery</strong>
                  </Modal.Header>
                  <Modal.Body scrollable='true'>
                    <div className="container ">
                      <div className="row">
                        <div className="col-lg-6 col-sm-12 ">
                          <h4 className=" d-flex justify-content-center">Billing Address</h4>
                          <div className="text-muted">
                            <div className="form-floating">
                              <input type='text' name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} className="form-control shadow-none mt-1" id="name" />
                              <label htmlFor="name">Name</label>
                              <p style={{ fontSize: "12px", color: 'red' }}>{formik.errors.name}</p>
                            </div>
                            <div className="form-floating">
                              <input type='text' validate={validateEmail} name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className="form-control mt-1 shadow-none" id="email" />
                              <label htmlFor="email">Email address</label>
                              <p style={{ fontSize: "12px", color: 'red' }}>{formik.errors.email}</p>
                            </div>
                            <div className="form-floating">
                              <input type='number' name="Number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Number} className="form-control mt-1 shadow-none" id="phone" />
                              <label htmlFor="phone">Phone No</label>
                              <p style={{ fontSize: "12px", color: 'red' }}>{formik.errors.Number}</p>
                            </div>
                            <div className="form-floating">
                              <select name="State" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.State} className="form-select mt-1 shadow-none" id="floatingSelect" aria-label="Floating label select example">
                                <option></option>
                                <option>Punjab</option>
                                <option>Sindh</option>
                                <option>Balochistan</option>
                                <option>KPK</option>
                              </select>
                              <label htmlFor="floatingSelect">Select Your State</label>
                              <p style={{ fontSize: "12px", color: 'red' }}>{formik.errors.State}</p>
                            </div>
                            <div className="form-floating ">
                              <input type='text' name="Address" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Address} className="form-control mt-1 shadow-none" id="address" />
                              <label htmlFor="address">Your address</label>
                              <p style={{ fontSize: "12px", color: 'red' }}>{formik.errors.Address}</p>
                            </div>
                            <textarea name="Message" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Message} className="form-control mt-1 shadow-none" placeholder="Enter Your special Message" rows={5} />
                            <p style={{ fontSize: "12px", color: 'red' }}>{formik.errors.Message}</p>
                          </div>
                        </div>
                        <div className="col-sm-12 col-lg-5">
                          <h4 className="d-flex justify-content-center">Cart Items</h4>
                          {getData.map((a) => (
                            <div key={a.id} className="d-flex justify-content-between mt-3 text-muted">
                              <span >{a.Name}</span>
                              <span >${a.price} x {a.quantity}</span>
                            </div>
                          ))}
                          <div className="d-flex justify-content-between mt-3 text-muted">
                            <span >Delivery Charges</span>
                            <span >$150</span>
                          </div>
                          <hr></hr>
                          <div className="d-flex justify-content-between mt-3 text-muted">
                            <span>Grand Total</span>
                            <span>${price + 150}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <div>
                      <button type="button" className="btn btn-secondary me-1" onClick={() => setLgShow(false)}>Close</button>
                      <button type="submit" className="btn btn-primary shadow-none">Shop Now</button>
                    </div>
                  </Modal.Footer>
                </form>

              </Modal>
            </div>
          </>
        ) : (
          <div className="d-flex justify-content-center">
            Your cart is empty
          </div>
        )}
        <div className="container">
          <div className="featured container no-gutter">
            <div className="row posts">
              {getData.map((cartPost, id) => (
                <div key={id} className="item high col-md-4 d-flex justify-content-center">
                  <span>
                    <div className="featured-item">
                      <img style={{ height: "200px" }} className="img-fluid w-100" src={cartPost.image} alt="" />
                      <h4 className="fs-5 fw-bolder text-black">{cartPost.Name}</h4>
                      <h6 className="fs-5 fw-bold ">${cartPost.price * cartPost.quantity}</h6>
                      <div className="d-flex justify-content-between align-items-center mt-2" style={{ height: 30, cursor: "pointer", background: "#ddd", color: "#111" }} >
                        <span className="ms-2" onClick={cartPost.quantity <= 0 ? deleleItem(cartPost.id) : () => Decreament(cartPost)}>-</span>
                        <span>{cartPost.quantity}</span>
                        <span className="me-2" onClick={() => Increament(cartPost, id)}>+</span>
                      </div>
                      <div className="d-grid gap-2 mt-2">
                        <button onClick={() => deleleItem(cartPost.id)} className="btn btn-danger">Remove from cart </button>
                      </div>
                    </div>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Cart;
