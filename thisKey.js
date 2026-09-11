console.log(window);// Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

function getName() {
    console.log(this);
}   


getName(); // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}



const user = {
    name: 'Shivram',
    age:32,
    about: function () {
        console.log(this);
    }
}

user.about(); 
const user1=user.about;
user1(); 
// {name: 'Shivram', age: 32, about: ƒ}
// Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

const user2 = {
    name: 'Shivram',
    age: 32,
    about: function () {
        console.log(this);

        const innerFunc = function() {
            console.log(this);
        };

        innerFunc(); // works
    }
};

user2.about();
// {name: 'Shivram', age: 32, about: ƒ}
//  Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

const user3 = {
    name: 'Shivram',
    age:32,
    about: function () {
        console.log(this);
        const innerFunc = () => {
            console.log(this);
        }
        innerFunc();
    }

}

user3.about(); 

//  {name: 'Shivram', age: 32, about: ƒ}
//  {name: 'Shivram', age: 32, about: ƒ}