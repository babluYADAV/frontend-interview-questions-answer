console.log(4 + "3" + 2+ 6);

let i=0;

for(i<5;i++;){

}
console.log(i)


//es 6 features

//state of promises

// can we use only await without then


// lifecycle method react

// unidirectional data flow

//server side rendering in react

//array destructuring

//react.memo()

//pure component

//how to pass data from child to parent 

//can we pass react hook as a prop

//HOC
//react.fragment

//focus on input
//useEffect hook
// how to clean up resource in useEffect

//use of redux

// Warning: Can't perform a React state update on an unmounted component.
// This is a no-op, but it indicates a memory leak in your application.
// To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount
// method.
// useEffect(() => {
//     let isMounted = true;               // note mutable flag
//     someAsyncOperation().then(data => {
//       if (isMounted) setState(data);    // add conditional check
//     })
//     return () => { isMounted = false }; // cleanup toggles value, if unmounted
//   }, []);   
