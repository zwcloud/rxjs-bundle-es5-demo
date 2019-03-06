const { range } = require('rxjs');
require("./Student")

class Program {
    static main(): void {
        range(1, 10).subscribe(x => console.log(x));
        var student = new Student("Rollup", "Babel");
    }
}

Program.main();
