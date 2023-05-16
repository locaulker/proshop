import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = ({ match }) => {
  const params = useParams()

  const product = products.find(p => p._id === params.id)
  console.log(product)

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go back
      </Link>
    </>
  )
}

export default ProductScreen
