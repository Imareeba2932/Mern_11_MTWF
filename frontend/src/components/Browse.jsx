import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";

const Browse = () => {
    const [product, setProduct] = useState([]);

    //   const { category } = useParams();

    const fetchProduct = async () => {
        const res = await fetch("http://localhost:5000/product/getall");

        console.log(res.status);

        const data = await res.json();
        console.log(data);
        if (res.status === 200) {
            // const data = await res.json();
            console.log(data);
            setProduct(data)
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    const displayProduct = () => {
        return product.map((obj) => (
            <div className="conatainer">
                <div className="col-md-4">
                    <div className="card p-3 mb-5 bg-dark p-card">
                        <h3 style={{ paddingLeft: "20px" }} className="mt-3 text-light">{obj.pname}</h3>
                        <p style={{ paddingLeft: "20px" }} className="text-light">{obj.pprice}</p>
                        {/* <Link to={'/view/' + service._id} className="btn btn-outline-primary m-2">Know More</Link> */}


                    </div>
                </div>
            </div>
        ));
    }

    return (
        <div className=''>
            <header className='bg-body-tertiory'>
                <div className='container py-5'>

                    <p className='display-2 text-center mb-5 fw-bold'>All Products</p>

                    <input type="text" placeholder='Search Items' className='form-control w-75 m-auto'  />

                </div>
            </header >
            <div className='container mt-5 '>

                <div className='row mt-5 p-5'> {displayProduct()} </div>


            </div>
        </div >
    )
}

export default Browse