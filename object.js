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

export default Person