import React, { useState, useEffect } from "react";
import Navbar from "./ReusedComponents/Navbar";
import Footer from "./ReusedComponents/Footer";
import Subscribe from "./ReusedComponents/Subscribe";
import Pagination from "./ReusedComponents/Pagination";
import { useNavigate } from "react-router-dom";
import api from "../AxiosInstance/api";


const Home = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const pageNumbers = [];
    const navigate = useNavigate()

    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await api.get('/posts');
            setPosts(res.data);
        }
        fetchPosts();
    }, [])
    console.log(currentPosts)
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const toProductDetails = (id, image, Name, price, details) => {
        navigate(`/products/${id}`, { state: { id, Name, price, image, details } });
    };
    return (
        <div>
            <Navbar />
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="caption">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="featured-page mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <div className="section-heading">
                                <h1 className="text-black fw-bolder mt-5 mb-5">Featured Items</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container mb-5" >
                    <div className="row posts">
                        {currentPosts.map((p, id) =>
                            <div key={id} className="col-md-4 d-flex justify-content-center">
                                <span>
                                    <div className="featured-item">
                                        <span type='button' onClick={() => toProductDetails(id, p.image, p.name, p.price, p.details)}>
                                            <img style={{ height: "250px" }} className="img-fluid w-100" src={p.image} alt="" />
                                            <h4 className="fs-5 fw-bolder text-black">{p.Name}</h4>
                                            <h6 className="fs-5 fw-bold ">${p.price}</h6>
                                        </span>
                                        <div className="d-grid gap-2">
                                        </div>
                                    </div>
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
            </div>

            <Subscribe />
            <Footer />

        </div>
    );
}
export default Home;