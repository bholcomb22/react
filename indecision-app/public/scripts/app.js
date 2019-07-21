'use strict';

console.log('app.js is running');

//JSX

var app = {
    title: 'Title',
    subtitle: 'subtitle',
    options: ['one', 'two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options: ' + app.options : 'no options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item 2'
        )
    )
);

var me = {
    name: 'Ben Holcomb',
    age: 29,
    location: 'Pensacola'
};

var getLocation = function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location :',
            location
        );
    }
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        me.name ? me.name : 'balls'
    ),
    me.age && me.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        me.age
    ),
    getLocation(me.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
