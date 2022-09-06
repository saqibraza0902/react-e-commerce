import React from "react";
import Navbar from "./ReusedComponents/Navbar";
import Subscribe from "./ReusedComponents/Subscribe";
import Footer from "./ReusedComponents/Footer";
import aboutPic from '../images/about-us.jpg';

const About = () => {
    return (
        <div>
            <Navbar />

            <div className="about-page mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5 mb-3">
                            <div className="section-heading ">
                                <h1 className="text-black">About Us</h1>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="left-image">
                                <img className="col-12" src={aboutPic} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-content col-md-12">
                                <h4 className="fw-bolder fs-4">Phasellus vel interdum elit</h4>
                                <p>Photo Credit goes to Pexels website. Aliquam erat volutpat. Pellentesque fringilla, ligula consectetur cursus scelerisque, leo elit pellentesque sapien, et pharetra arcu elit vitae sem. Suspendisse erat dui, condimentum in mi ac, varius tempor sapien. Donec in justo sit amet ex aliquet maximus ac quis erat.</p>
                                <br></br>
                                <p>Donec fermentum tincidunt tellus quis fermentum. Proin eget imperdiet purus. Nulla facilisi. Aliquam tincidunt porttitor dui sed euismod. Duis est libero, rhoncus fermentum turpis id, tempus fringilla ipsum. Nullam venenatis tincidunt neque vel hendrerit. Suspendisse porta pretium porttitor.</p>
                                <br></br>
                                <p>Sed purus quam, ultricies eu leo in, sollicitudin varius quam. Proin dictum urna ac diam fermentum tempus. Pellentesque urna urna, ullamcorper a tincidunt dignissim, venenatis in nisi. Vivamus in volutpat tellus. Etiam fermentum luctus posuere.</p>
                                <br></br>
                                <p>Pixie HTML Template can be converted into your desired CMS theme. You can use this Bootstrap v4.1.3 layout for any online shop. Please tell your friends about Tooplate. Thank you.</p>
                                <div className="share mt-5">
                                    <h6>Find us on: <span><a href="/"><i className="ui facebook f icon"></i></a><a href="/"><i className="ui linkedin in icon"></i></a><a href="/"><i className="ui twitter icon"></i></a></span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About Page Ends Here --> */}
            <Subscribe />
            <Footer />
        </div>
    );
}
export default About