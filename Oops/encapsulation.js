class BankAccount {
  name;
  accountNumber;
  #balance;
  constructor(name, balance = 0) {
    this.name = name;
    this.accountNumber = Math.floor(Math.random() * 1000000);
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited ${amount}. New balance is ${this.#balance}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(`Insufficient funds. Current balance is ${this.#balance}`);
    } else {
      this.#balance -= amount;
      console.log(`Withdrew ${amount}. New balance is ${this.#balance}`);
    }
  }
  set balance(amount) {
    if (amount < 0) {
      console.log("Balance cannot be negative.");
    } else {
      this.#balance = amount;
    }
  }

  get balance() {
    return this.#balance;
  }

  #interestCalculation() {
    console.log("This is a private method.");
  }
}

const account1 = new BankAccount("Alice", 1000);
console.log(`Account Details: ${JSON.stringify(account1)}`);
account1.deposit(500);
account1.withdraw(200);
console.log(`Account Details after transactions: ${JSON.stringify(account1)}`);

account1.balance = -100; // Attempt to set a negative balance
console.log(`Final Balance: ${account1.balance}`); // Accessing the balance using the getter
account1.balance = 1500; // Setting a valid balance
console.log(`Final Balance after update: ${account1.balance}`); // Accessing the updated balance using the getter
// account1.#interestCalculation(); // Attempt to call the private method (will throw an error)
