function BankAccount(name, balance=0) {
    this.name = name;
    this.accountNumber = Math.floor(Math.random() * 1000000);
    this.balance = balance;
    // this.deposit = function (amount) {
    //     this.balance += amount;
    //     console.log(`Deposited ${amount}. New balance is ${this.balance}`);
    // }
    this.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log(`Insufficient funds. Current balance is ${this.balance}`);
        } else {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}`);
        }
    }
} 


console.log(BankAccount.prototype.constructor); // Output: [Function: BankAccount]

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance is ${this.balance}`);
}
const account1 = new BankAccount('Alice', 1000);
console.log(`Account Details: ${account1}`);
account1.deposit(500);
account1.withdraw(200);
