import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination d-flex justify-content-center'>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <span onClick={() => paginate(number)} className='m2 fw-ligter' style={{ cursor: "pointer" }}>
                            <i className=' ui stop icon'></i>
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;