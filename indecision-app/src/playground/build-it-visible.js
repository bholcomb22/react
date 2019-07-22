






const visObject = {
    clicked: false,
}

const toggle = () => {
    visObject.clicked = !visObject.clicked
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggle}>{visObject.clicked ? 'Hide Details' : 'Show Details'}</button>
            {visObject.clicked && <p>Here is your stuff fool</p>}
        </div>    
    )
    ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app');

render()