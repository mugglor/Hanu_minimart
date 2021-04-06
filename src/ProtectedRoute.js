import React, { Component } from 'react'
import { BrowserRouter as Router, withRouter, Link, Route, Redirect } from 'react-router-dom';

class ProtectedRoute extends Component {

    render() {
        const { isLogin, path, children, exact } = this.props;
        console.log("protected ", this.props)
        return <Route exact={exact} to={path} {...this.props}>
            {isLogin ? children : <Redirect push to="/signin" />}
        </Route>
    }
}

export default withRouter(ProtectedRoute);