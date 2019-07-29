import React from 'react'

const Things = (props) => (
    <div>
        <h1>A Thing I've done</h1>
        <p>This page is coming from {props.match.params.id}</p>
    </div>
)

export default Things