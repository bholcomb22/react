
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor (name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeBase) {
        super(name, age)
        this.homeBase = homeBase
    }
    hasHomeBase() {
        return !!this.homeBase
    }
    getDescription() {
        let description = super.getDescription()

        if(this.hasHomeBase()) {
            description+= ` Their homebase is ${this.homeBase}`
            return description
        }
        return description
    }
}


const me = new Traveler('Ben', 29, 'Denver')
const other = new Traveler()

console.log(other.getDescription())
console.log(me.getDescription())