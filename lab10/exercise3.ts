class Person {
    private _firstName: string;
    get firstName () {
        return this._firstName;
    }
    set firstName(value: string) {
        this._firstName = value;
    }
}
let person = new Person();
person.firstName = "Tsoodol";
console.log(person.firstName);