import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
    const LoginAuth = useSelector(state => state.LoginAuth)
    const {isAuth} = LoginAuth

    return (
        <Route {...rest} render={(props) => { return isAuth ? <Component {...props}/> : <Redirect to='/login'/>}}></Route>
    )
}

export default PrivateRoute