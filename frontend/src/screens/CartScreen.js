import React, { useEffect } from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addTocart } from '../actions/cartActions'

const CartScreen = () => {
  const params = useParams()
  let navigate = useNavigate()
  let location = useLocation()

  const productId = params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addTocart(productId, qty))
    }
  }, [dispatch, productId, qty])

  return <div>CartScreen</div>
}

export default CartScreen
