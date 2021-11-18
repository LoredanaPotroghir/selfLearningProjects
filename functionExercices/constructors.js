function Person(param1, param2, param3) {
    this.name = param1;
    this.surname = param2;
    this.birthDate = param3;
    this.age = function () {
        return 2021 - this.birthDate;
    };
}
let person1 = new Person("Loredana", "Potroghir", 1994);
console.log(person1.name);
console.log(person1.age());
