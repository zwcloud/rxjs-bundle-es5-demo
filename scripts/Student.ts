require("./Name")
class Student {
    public Name: Name;
    public Number: number;
    constructor(firstName : string, lastName: string) {
        this.Name = new Name(firstName, lastName);
    }
}