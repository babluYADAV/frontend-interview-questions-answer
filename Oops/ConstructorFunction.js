function BankAccount(name, balance=0) {
    this.name = name;
    this.accountNumber = Math.floor(Math.random() * 1000000);
    this.balance = balance;
    this.deposit = function (amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}`);
    }
    this.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log(`Insufficient funds. Current balance is ${this.balance}`);
        } else {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}`);
        }
    }
}   


const account1 = new BankAccount('Alice', 1000);
console.log(`Account Details: ${JSON.stringify(account1)}`);
account1.deposit(500);
account1.withdraw(200);

console.log(`Account Details after transactions: ${JSON.stringify(account1)}`);
// console.log(`Account Number: ${account1.accountNumber}`);
// console.log(`Final Balance: ${account1.balance}`);


const account2 = new BankAccount('Bob');
console.log(`Account Details: ${JSON.stringify(account2)}`);
account2.deposit(300);
account2.withdraw(100);
console.log(`Account Details after transactions: ${JSON.stringify(account2)}`);
// console.log(`Account Number: ${account2.accountNumber}`);
// console.log(`Final Balance: ${account2.balance}`);
        