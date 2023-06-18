// //task1

// function propsCount(currentObject) {
//   let count = 0;
//   for (let prop in currentObject) {
//     if (currentObject.hasOwnProperty(prop)) {
//       count++;
//     }
//   }
//   return count;
// }

// let mentor = {
//   course: "JS fundamental",
//   duration: 3,
//   direction: "web development",
// };

// console.log(propsCount(mentor));

// //task2

// function showProps(obj) {
//   let properties = Object.keys(obj);
//   let values = properties.map((prop) => obj[prop]);

//   console.log("Properties:", properties);
//   console.log("Values:", values);
// }

// let person = {
//   name: "John",
//   age: 30,
//   gender: "male",
//   occupation: "developer",
//   location: "New York",
// };

// showProps(person);

//task3

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    console.log(`${this.name} ${this.surname}`);
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(middleName) {
    console.log(`${this.name} ${middleName} ${this.surname}`);
  }

  showCourse() {
    const currentYear = new Date().getFullYear();
    const course = currentYear - this.year + 1;
    console.log(`Current Course: ${course}`);
  }
}

const person = new Person("John", "Doe");
person.showFullName();

const student = new Student("Jane", "Smith", 2020);
student.showFullName("Anne");

student.showCourse();

//task4

class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this.experience = 1.2;
  }

  showSalary() {
    const salary = this.dayRate * this.workingDays;
    console.log(`${this.fullName} salary: ${salary}`);
  }

  showSalaryWithExperience() {
    const salary = this.dayRate * this.workingDays * this.experience;
    console.log(`${this.fullName} salary: ${salary}`);
  }

  setExperience(newExperience) {
    this.experience = newExperience;
    console.log(`New experience: ${newExperience}`);
  }

  static sortSalaries(workers) {
    workers.forEach((worker) => {
      console.log(`\n${worker.fullName}\n`);
      worker.showSalary();
      worker.setExperience(1.2);
      worker.showSalaryWithExperience();
      worker.setExperience(1.5);
      worker.showSalaryWithExperience();
    });
  }
}

const worker1 = new Worker("John Doe", 100, 20);
const worker2 = new Worker("Jane Smith", 150, 15);
const worker3 = new Worker("David Johnson", 120, 22);

const workers = [worker1, worker2, worker3];
Worker.sortSalaries(workers);

//task5

class GeometricFigure {
  getArea() {
    return 0;
  }

  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  getArea() {
    return (this.base * this.height) / 2;
  }
}

class Square extends GeometricFigure {
  constructor(side) {
    super();
    this.side = side;
  }

  getArea() {
    return this.side * this.side;
  }
}

class Circle extends GeometricFigure {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

function handleFigures(figures) {
  const totalArea = figures.reduce((sum, figure) => {
    if (figure instanceof GeometricFigure) {
      const area = figure.getArea();
      console.log(`${figure.toString()}: Area = ${area.toFixed(2)}`);
      return sum + area;
    }
    return sum;
  }, 0);

  console.log(`Total Area: ${totalArea.toFixed(2)}`);
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
handleFigures(figures);
