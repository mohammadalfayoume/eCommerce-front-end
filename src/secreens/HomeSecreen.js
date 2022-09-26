import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeSecreen = () => {
  const [products, setProducts] = useState([]) //we use useState because it works like the constructor

  // we use useEffect it excecuted when component loades or page refresh //it similer to componentDidMount() in class component
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products') //we have to add proxy in the package.json to look at http://localhost:5000 rather than looking to http://localhost:3000, so we added "proxy": "http://127.0.0.1:5000"

      setProducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            {' '}
            {/*adding key to the element to make it unique*/}
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeSecreen
