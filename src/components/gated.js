import React, { useContext } from 'react'

import { UserContext } from '../context/user-context'

import Login from '../components/login'

export default ({ children, showLogin }) => {
    const {loggedIn} = useContext(UserContext)

    if (loggedIn) { return <div>{children && children}</div> }

    if (showLogin) { return <Login /> }

    return null

}