//Higher order compnent (HOC) a component (HOC) that renders another component
//reuse code
//render hijacking
//prop manipulation
//abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is: {props.info} </p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is privledged information. Please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {!props.isAuthenticated ? <p>please login to see this information</p> : <WrappedComponent {...props} />}
        </div>
    )
}



const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is the detail" />, document.querySelector('#app'))