import React from 'react'
import { Link } from 'react-router-dom'

const Showcase = () => (
    <div>
        <h1>This is stuff I've done</h1>
        <Link to="/showcase/1">Item one</Link>
        <Link to="/showcase/2">Item two</Link>
    </div>
)

export default Showcase