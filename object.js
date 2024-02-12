//building object using class constructor blueprint

const Person = class {
    constructor(
        name,
        age,
        nationality,
        isSingle
    ) {
        this.name = name,
        this.age = age,
        this.nationality = nationality,
        this.isSingle = isSingle
    }

    toggleisSingle(change) {
        this.isSingle = change
    }

    toggleNationality(change) {
        this.nationality = change
    }
}

//building pbject using function constructor blueprint

function Car(
    name,
    model,
    year,
    color
){
    this.name = name,
    this.model = model,
    this.year = year,
    this.color = color
}

export default Person