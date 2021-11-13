import axios from 'axios'
import { ADD_TO_CART, REMOVE_FROM_CART } from './action.types'

const addToCart = (productId) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/product/get-product/${productId}`)
        dispatch({ type: ADD_TO_CART, payload: { product: data._id, image: data.thumb, price: data.price, name: data.name } })
      
    } catch (err) {
        console.log(err)
    }
}

const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type: REMOVE_FROM_CART, payload: productId})
}

export {addToCart, removeFromCart}