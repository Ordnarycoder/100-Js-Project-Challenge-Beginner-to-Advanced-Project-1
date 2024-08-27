const readline = require('readline');

class Calculator {
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }

    menu() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const displayMenu = () => {
            console.log("\n1-Addition 2-Subtraction 3-Multiplication 4-Division 5-Exit");
            rl.question("Please select a number: ", (option) => {
                if (option == 1) {
                    this.addition();
                    displayMenu();
                } else if (option == 2) {
                    this.subtraction();
                    displayMenu();
                } else if (option == 3) {
                    this.multiplication();
                    displayMenu();
                } else if (option == 4) {
                    this.division();
                    displayMenu();
                } else if (option == 5) {
                    rl.close();
                } else {
                    console.log("Invalid option. Please select a valid number.");
                    displayMenu();
                }
            });
        };

        displayMenu();
    }

    addition() {
        let result = this.number1 + this.number2;
        console.log(`Result: ${result}`);
    }

    subtraction(){
        let result = this.number1 - this.number2;
        console.log(`Result: ${result}`);
    }

    multiplication(){
        let result = this.number1 * this.number2;
        console.log(`Result: ${result}`);
    }

    division(){
        if (this.number2 === 0) {
            console.log("Cannot divide by zero.");
        } else {
            let result = this.number1 / this.number2;
            console.log(`Result: ${result}`);
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first number: ", (num1) => {
    rl.question("Enter the second number: ", (num2) => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        const calculate = new Calculator(number1, number2);
        calculate.menu();
    });
});
