class BankAccount {
    constructor(name, balance = 0) {
        this.name = name;
        this.accountNumber = Math.floor(Math.random() * 1000000);
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}`);
    }


    withdraw(amount) {
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
