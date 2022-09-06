import React from "react";

const Subscribe = () => {
    return (
        <div>
            <div className="subscribe-form text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <div className="line-dec"></div>
                                <h1>Subscribe on PIXIE now!</h1>
                            </div>
                        </div>
                        <div className="col-md-8 offset-md-2">
                            <div className="main-content">
                                <p>Godard four dollar toast prism, authentic heirloom raw denim messenger bag gochujang put a bird on it celiac readymade vice.</p>
                                <div className="container">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-7">
                                                <fieldset>
                                                    <input name="email" type="text" placeholder="Your Email" className="form-control bg-white" id="email" required />
                                                </fieldset>
                                            </div>
                                            <div className="col-md-5">
                                                <fieldset>
                                                    <button type="submit" id="form-submit" className="btn btn-light text-primary text-uppercase w-100" style={{ height: "45px" }}>Subscribe Now!</button>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Subscribe