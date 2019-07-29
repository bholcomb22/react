

// const person = {
//     name: undefined,
//     age: 29,
//     location: {
//         city: 'Pensacola',
//         temp: 90
//     }
// }

// const {name = 'anonymous', age} = person

// console.log(`${name} is ${age}`)

// const {city: closestCity, temp: temperature} = person.location

// if(closestCity && temperature) {
//     console.log(`It's ${temperature} in ${closestCity}`)
// }

// const book = {
//     title: 'Sword of Truth',
//     author: 'Andy something',
//     publisher: {
//         name: 'publisher'
//     }
// };

// const {name: publisherName = 'Self Published'} = book.publisher

// console.log(publisherName)

const address = ['1061 perdido manor dr', 'pensacola', 'Florida', '12345']

const [street, city, state, zip] = address

console.log(street, city, state, zip)

const item = ['coffee (hot)', '$2.00', '$2.5', '$3']

const [beverage, , mediumPrice] = item

console.log(`A medium ${beverage} costs ${mediumPrice}`)