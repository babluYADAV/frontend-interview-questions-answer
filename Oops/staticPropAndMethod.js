

class User{
    static id=1;
    constructor(name, age,income) {
        this.name = name;
        this.age = age;
        this.income = income;
        this.id=User.id++;
    }

    static compareAge(user1, user2) {
        return user1.age - user2.age;
    }

    static compareIncome(user1, user2) {
        return user1.income - user2.income;
    }
}

const user1 = new User("Shivram", 25, 70000);
const user2 = new User("Ravi", 30, 60000);
const user3 = new User("Ramesh", 15, 40000);
const users=[user1,user2,user3];
users.sort(User.compareAge);
users.sort(User.compareIncome);


console.log(user1);
console.log(user2);
console.log(user3);
console.log(users);

//---------------------------------------------------//
class Config {
    static apiUrl = "https://api.example.com";
}

const config1 = new Config();
console.log(Config.apiUrl);
Config.apiUrl = "https://api.newexample.com";
console.log(Config.apiUrl);


//---------------------------------------------------//
class MathUtils {
    static cache = {
        1:'some data',
        2:'some data',
        3:'some data',
    };

    static hasInCache() {
        console.log(this.cache);//this can we use inside static method to access static property
    }
}   


MathUtils.hasInCache();
