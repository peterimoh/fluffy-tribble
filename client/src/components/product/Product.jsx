import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Tag, Space } from 'antd';
import { getProduct } from '../../actions/productAction'

export const Product = () => {

    const products = useSelector(state => state.products)
    const {loading, data, error} = products
    const dispatch = useDispatch()

    useEffect(() => {
     dispatch(getProduct())
    }, [])

    return (
        <section id='product-list'>
            <div className="container">
        <h1>Products</h1>
                product List
                <Table/>
            </div>
        </section>
    )
}
