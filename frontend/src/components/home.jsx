import React from 'react'
import image from './img.jpg'

const Home = () => {
  const tagStyle ={
    height: '50px',
    backgroundColor: 'yellow',
    padding: '10px',
  }
  return (
    <div>
      <header>
        <h1 className='head'>My First React App</h1>
        <img src={image} alt="Logo" style={{height:'400px', width: '100%'}} />
      </header>
      <p className='para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, nesciunt.</p>
      <p style={tagStyle} >Lorem ipsum dolor sit amet.</p>
    </div>

  )
}

export default Home