import { range } from "rxjs";

class Program {
    static main(): void {
        var student = new Student("Rollup", "Babel");
        range(1, 10).subscribe(x => console.log(x));
    }
}

Program.main();
