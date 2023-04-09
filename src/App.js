import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setData(json))
  })
  return (
    <div>
      <h1>Get API Call</h1>{
        data.map((product) => {
          return <div className="card" style={{width:"18rem"}}>
          <h5 className="card-title">{product.id}</h5>
            <img className="card-img-top"  style={{width:"200px",height:"200px"}} src={product.image} alt="Card image cap" />
            <div className="card-body">
              
              <h1 className='price'>${product.price}</h1>
              <p className="card-text">{product.description}</p>
              <p className='category'>{product.category}</p>
              <a href="#" className="btn btn-primary">Buy Now</a>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default App
