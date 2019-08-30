export class Developer {
    constructor(name, lastname = 'Default') {
        this.name = name;
        this.lastname = lastname
    }
    printName() {
        return this.name;
    }
}