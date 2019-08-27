class Human {
    constructor(name, dateOfBirth) {
        this.name = name;
        // this.age = age;
        this.dateOfBirth = new Date(dateOfBirth);
        this.age = this.birthDateToAge(this.dateOfBirth);
    }
    displayInfo() {
        return `${this.name} - ${this.age} - ${this.dateOfBirth}`;
    }
    birthDateToAge(birthDate) {
        birthDate = new Date(birthDate);
        let now = new Date(),
        age = now.getFullYear() - birthDate.getFullYear();
        return now.setFullYear(1972) < birthDate.setFullYear(1972) ? age - 1 : age;
    }

}

class Employee extends Human {
    constructor(name, dateOfBirth, salary, department) {
        super(name, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }
    displayInfo() {
        return `${super.displayInfo()} - ${this.salary} - ${this.department}`;
    }
}

class Developer extends Employee {
    constructor(name, dateOfBirth, salary, department, manager = null) {
        super(name, dateOfBirth, salary, department);
        this.manager = manager;
    }

    setManager(manager, callFromManager = false) {
        if (manager !== null && !(manager instanceof Manager)) {
            throw new SyntaxError('Объект не является экземпляром класса Manager');
        }
        if (!callFromManager) {
            if (this.hasManager()) {
                this.manager.removeDeveloper(this, true);
            }
            if (manager !== null) {
                manager.addDeveloper(this, true);
            }
        }

        this.manager = manager;
    }

    hasManager() {
        return this.manager !== null;
    }
}

class Manager extends Employee {
    constructor(name, dateOfBirth, salary, department) {
        super(name, dateOfBirth, salary, department);
        this.developers = [];
    }

    removeDeveloper(developer, callFromDeveloper = false) {
        if (!(developer instanceof Developer)) {
            throw new SyntaxError('Объект не является экземпляром класса Developer');
        }
        let index = this.developers.indexOf(developer);
        if (index !== -1) {
            this.developers.splice(index, 1);
            if (!callFromDeveloper) {
                developer.setManager(null, true);
            }
        }
    }

    addDeveloper(developer, callFromDeveloper = false) {
        if (!(developer instanceof Developer)) {
            throw new SyntaxError('Объект не является экземпляром класса Developer');
        }
        let index = this.developers.indexOf(developer);
        if (index === -1) {
            this.developers.push(developer);
            if (!callFromDeveloper) {
                developer.setManager(this, true);
            }
        }
    }

    printDevelopers() {
        console.log(this.developers.map(item => item.name));
    }
}

let manager1 = new Manager('Manager1', '1995-12-25', 4000, 'devops');
console.log(manager1.displayInfo());

let developer1 = new Developer('Developer1', '1994-01-23', 3000, 'devops', manager1);
console.log(developer1.displayInfo());

let developer2 = new Developer('Developer2', '1993-02-28', 3000, 'devops');
console.log(developer2.displayInfo());

let developer3 = new Developer('Developer3','1992-11-11', 3000, 'devops');
console.log(developer3.displayInfo());

manager1.addDeveloper(developer1); // Повторно разработчик не добавляется.
manager1.addDeveloper(developer2);
// manager1.addDeveloper(developer2); // Повторно разработчик не добавляется.

manager1.printDevelopers();

manager1.removeDeveloper(developer3); // Удаление постороннего разработчика не имеет эффекта.
manager1.removeDeveloper(developer1);

manager1.printDevelopers();

developer3.setManager(manager1);
developer2.setManager(null);

manager1.printDevelopers();

developer3.setManager(developer2); // вызывает исключение
// manager1.addDeveloper(manager1); // вызывает исключение
