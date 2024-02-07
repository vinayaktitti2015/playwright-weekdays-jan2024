class Person {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  getName() {
    return this.name;
  }

  getFullDetails() {
    return `${this.name} ${this.email} ${this.phone}`; // string interpolation/string templates
  }
}

let obj = new Person("James Doe", "james@example", 912323232);
console.log(obj.getFullDetails());
