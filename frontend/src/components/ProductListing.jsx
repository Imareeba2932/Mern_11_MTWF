import React from 'react'
import Data from './DummyData'

const ProductListing = () => {
    const displayProducts = () => {
        return Data.map((obj) => (
            <div className='col-md-4 col-6 mb-4'>
                <div className='card'>

                </div>
            </div>
        ))

    }
  return (
    <div>
        <header className='bgimg text-white '>
            <div className='container py-3'>
                <h1 className='text-center'><strong>Browse Product</strong></h1>
                <hr />
                <input type="text" className='form-control m-auto w-75' placeholder='Search Product' />
            </div>
        </header>
    </div>
  )
}

export default ProductListing