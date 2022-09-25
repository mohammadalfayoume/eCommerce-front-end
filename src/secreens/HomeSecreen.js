import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'

const HomeSecreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}> adding key to the element to make it unique
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeSecreen
