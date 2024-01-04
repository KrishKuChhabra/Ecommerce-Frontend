import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/product_cart'


const Home = () => {
  const addToCartHandler=()=>{

  }
  return (
     <div className='home'>
      <section></section>
      <h1>
      Latest Changess
      <Link to="/search" className='findmore'>
        more
      </Link>
      </h1>

      <main>
        <ProductCard productId='add' name='macbook' price={455} stock={4} handler={addToCartHandler} photo='https://rukminim2.flixcart.com/image/416/416/khdqnbk0/computer/f/y/t/apple-original-imafxfyqydgvrkzv.jpeg?q=70'  />
      </main>
     </div>
  )
}

export default Home
