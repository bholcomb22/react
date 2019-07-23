
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility(e) {
        e.preventDefault()
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Toggle App</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide' : 'show'}</button>
                {this.state.visibility && <p>This is the text</p>}
            </div>
            
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))



// const visObject = {
//     clicked: false,
// }

// const toggle = () => {
//     visObject.clicked = !visObject.clicked
//     render()
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggle}>{visObject.clicked ? 'Hide Details' : 'Show Details'}</button>
//             {visObject.clicked && <p>Here is your stuff fool</p>}
//         </div>    
//     )
//     ReactDOM.render(template, appRoot)
// }

// const appRoot = document.getElementById('app');

// render()