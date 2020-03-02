import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Login from './components/Login'
import Listings from './components/Listings'


// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
export const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

// Write ProtectedRoute function here
const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to="/login" />}
        />
    )
}

const Router = () => {
    return (
        <Switch>
        <Route exact path="/" component={Listings}/>
            <Route path="/login" component={Login} />
            <Route path="/listings" component={Listings} />
        </Switch>
    );
};

export default Router;