console.log('app.js is running');

//JSX

const app = {
    title: 'Title',
    subtitle: 'subtitle',
    options: ['one', 'two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options: ' + app.options : 'no options' }</p>
        <ol>
            <li>Item one</li>
            <li>Item 2</li>
        </ol>
    </div>
);

const me = {
    name: 'Ben Holcomb',
    age: 29,
    location: 'Pensacola'
}

const getLocation = (location) => {
    if(location) {
        return <p>Location :{location}</p>
    } 
}

const templateTwo = (
    <div>
        <h1>{me.name ? me.name : 'balls'}</h1>
        {(me.age && me.age >= 18) && <p>Age: {me.age}</p>}
        {getLocation(me.location)}
    </div>
)


const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot)