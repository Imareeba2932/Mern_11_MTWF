import React, {useState} from 'react'
import Data from './DummyData'

const ProductListing = () => {
    const [product, setProduct] = useState(Data)

    const displayProduct = () => {
        return product.map((obj) => (

            <div className='col-md-4 col-6 mb-4 mt-5'>
            <div className='card shadow'>
                <img className='card-img-top img' src={obj.image} alt='loading'/>
            </div>
            <div className='card-body mt-4'>
                <h3 className='card-tittle'>{obj.brand}</h3>
                <h4 className='card-subtitle mb-2 text-muted'>{obj.model}</h4>
                <h4 className='card-text'>Price: {obj.price}</h4>
            </div>
        </div>
     ));
    };
    const searchProduct = (e) =>{
        const search = e.target.value 
        let filteredProduct = Data.filter((product) =>{
            return product.brand.toLowerCase().includes(search.toLowerCase());
        });
        setProduct(filteredProduct)
    }
  return (
    <div>
        <header className='bgimg text-white '>
            <div className='container py-3'>
                <h1 className='text-center'><strong>Browse Product</strong></h1>
                <hr />
                <input onChange={searchProduct} type="text" className='form-control m-auto w-75' placeholder='Search Product' />
            </div>
        </header>
        <div className='container'>
            <div className="row">
                {displayProduct()}
            </div>
        </div>
        
    </div>
  )
}

export default ProductListing