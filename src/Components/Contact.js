import React from "react";
import Navbar from "./ReusedComponents/Navbar";
import Footer from "./ReusedComponents/Footer";
import Subscribe from "./ReusedComponents/Subscribe";
import { Formik } from "formik";
import api from "../AxiosInstance/api";
const Contact = () => {

    const onFormSubmit = async (values) => {
        const send = await api.post("/contact", values)
        alert("Your message have been recoreded")
        console.log(values, send)
    }
    return (
        <div>
            <Navbar />
            <div className="contact-page mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5">
                            <div className="section-heading">
                                <h1 className="text-black mb-3">Contact Us</h1>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div id="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217898.2332496289!2d72.94921565257488!3d31.423495311187107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1649446221632!5m2!1sen!2s" width="100%" height="500px" allowFullScreen="" name="map" title="map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-content">
                                <div className="container">
                                    <Formik
                                        initialValues={{ email: '', name: '', subject: '', message: '' }}
                                        validate={values => {
                                            const errors = {};
                                            if (!values.name) {
                                                errors.name = 'Please Enter Your Name'
                                            }
                                            if (!values.email) {
                                                errors.email = 'Please Enter Your Email';
                                            } else if (
                                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                            ) {
                                                errors.email = 'Invalid email address';
                                            }
                                            if (!values.subject) {
                                                errors.subject = 'Please Enter Your Subject'
                                            }
                                            if (!values.message) {
                                                errors.message = 'Please Enter Your Message'
                                            }
                                            return errors;
                                        }}
                                        onSubmit={(values, { resetForm }) => {
                                            onFormSubmit(values)
                                            resetForm({ values: '' })
                                        }
                                        }
                                    >
                                        {({ values, errors, touched, handleChange, handleBlur, isSubmitting, handleSubmit }) => (
                                            <form onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <input name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" className="form-control shadow-none" id="name" placeholder="Your name..." required="" />
                                                        <p style={{ fontSize: "12px", color: 'red' }}>{errors.name && touched.name && errors.name}</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} className="form-control shadow-none" id="email" placeholder="Your email..." required="" />
                                                        <p style={{ fontSize: "12px", color: 'red' }}> {errors.email && touched.email && errors.email}</p>
                                                    </div>
                                                    <div className="col-md-12 mt-5 mb-5">
                                                        <input name="subject" value={values.subject} onChange={handleChange} onBlur={handleBlur} type="text" className="form-control shadow-none" id="subject" placeholder="Subject..." required="" />
                                                        <p style={{ fontSize: "12px", color: 'red' }}> {errors.subject && touched.subject && errors.subject}</p>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <textarea name="message" value={values.message} onChange={handleChange} onBlur={handleBlur} rows="10" className="form-control shadow-none" id="message" placeholder="Your message..." required=""></textarea>
                                                        <p style={{ fontSize: "12px", color: 'red' }}>{errors.message && touched.message && errors.message}</p>
                                                    </div>
                                                    <div className="col-md-12 d-grid mt-5">
                                                        <button type="submit" disabled={isSubmitting} id="form-submit" className="btn btn-primary">Send Message</button>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="share mt-4">
                                                            <h6>You can also keep in touch on: <span><a href="/"><i className="ui facebook f icon"></i></a><a href="/"><i className="ui linkedin in icon"></i></a><a href="/"><i className="ui twitter icon"></i></a></span></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        )}
                                    </Formik>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About Page Ends Here --> */}

            {/* <!-- Subscribe Form Starts Here --> */}
            <Subscribe />
            {/* <!-- Subscribe Form Ends Here --> */}

            <Footer />

            {/* <!-- Footer Starts Here --> */}

        </div >
    )
}
export default Contact;