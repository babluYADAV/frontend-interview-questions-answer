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
        }


        else {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}`);
        }
    }
}



class SavingsAccount extends BankAccount {
    constructor(name, balance = 0, interestRate = 0.01) {
        super(name, balance);
        this.interestRate = interestRate;
    }

    addInterest() {
        const interest = this.balance * this.interestRate;
        this.balance += interest;
        console.log(`Added interest of ${interest}. New balance is ${this.balance}`);
    }
}


const savingsAccount = new SavingsAccount('Charlie', 2000, 0.02);
console.log(`Account Details: ${JSON.stringify(savingsAccount)}`);
savingsAccount.deposit(500);
savingsAccount.withdraw(300);
savingsAccount.addInterest();
console.log(`Account Details after transactions: ${JSON.stringify(savingsAccount)}`);
