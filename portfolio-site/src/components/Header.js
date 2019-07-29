import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink activeClassName="is-active" to="/" exact={true}>Home</NavLink>
        <NavLink to="/showcase" activeClassName="is-active" exact={true} >Portfolio</NavLink>
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
    </header>
)

export default Header