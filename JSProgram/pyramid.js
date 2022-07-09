//    *
//     * *
//    * * *
//   * * * *
//  * * * * *
//function pyramid(n) {

//     for(let i=1; i<= n; i++){

//       let str = ' '.repeat(n-i);

//       let str2 = '*'. repeat(i*2 -1)

//       console.log(str + str2 + str);

//     }

//   }

//   pyramid(5);

// const pyramid = (rows) => {
//   for (let i = 0; i < rows; i++) {
//     var output = "";
//     for (let j = 0; j < rows - i; j++) output += " ";
//     for (let k = 0; k <= i; k++) output += "* ";
//     console.log(output);
//   }
// };
// pyramid(5);

//  * * * * *
//   * * * *
//    * * *
//     * *
//      *
// const downPyramid = (rows) => {
//   let output = "",
//     m = 1;

//   for (let i = rows; i >= 1; i--) {
//     for (j = 1; j <= m; j++) {
//       output += " ";
//     }
//     for (k = 1; k <= i; k++) {
//       output += "* ";
//     }
//     m++;
//     output += "\n";
//   }
//   console.log(output);
// };
// downPyramid(5);

// *
// **
// ***
// ****
// *****

// const triangle = (rows) => {
//     let n = rows;
//     let string = "";
//     for (let i = 1; i <= n; i++) {
//       // printing spaces
//       for (let j = 0; j < n - i; j++) {
//         string += " ";
//       }
//       // printing star
//       for (let k = 0; k < i; k++) {
//         string += "*";
//       }
//       string += "\n";
//     }
//     console.log(string);

// };
// triangle(5);

//       *
//      **
//     ***
//    ****
//   *****
//  ******
// const triangle = (rows) => {
//   let str = "";
//   for (let i = 0; i <= rows; i++) {
//     for (let j =0; j <=  rows - i; j++) {
//       str += " ";
//     }
//     for (let k = 0; k <= i; k++) {
//       str += "*";
//     }
//     str += "\n";
//   }
//   console.log(str);
// };
// triangle(5);

// ******
//  *****
//   ****
//    ***
//     **
//      *
// const triangle = (rows) => {
//   let str = "";
//   for (let i = 0; i <= rows; i++) {
//     for (let j = 0; j <= i; j++) {
//       str += " ";
//     }
//     for (let k = 0; k <= rows - i; k++) {
//       str += "*";
//     }
//     str += "\n";
//   }
//   console.log(str);
// };
// triangle(5);

//   ******
//   *****
//   ****
//   ***
//   **
//   *
// const triangle = (rows) => {
//   let str = "";
//   for (let i = 0; i <= rows; i++) {
//     for (let j = 0; j <= rows; j++) {
//       str += " ";
//     }
//     for (let k = rows; k >= i; k--) {
//       str += "*";
//     }
//     str += "\n";
//   }
//   console.log(str);
// };
// triangle(5);
//        0123456
//        012345 
//        01234  
//        0123   
//        012    
//        01     
//        0      
// const triangle = (rows) => {
//   let str = "";
//   for (let i = 0; i <= rows; i++) {
//     for (let j = 0; j <= rows; j++) {
//       str += " ";
//     }
//     for (let k = 0; k <= rows-i; k++) {
//       str += k;
//     }
//     str += "\n";
//   }
//   console.log(str);
// };

// triangle(6);
// 0      
// 01     
// 012    
// 0123   
// 01234  
// 012345 
// 0123456


// const triangle = (rows) => {
//       let str = "";
//       for (let i = 0; i <= rows; i++) {
//         for (let j = 0; j <= rows; j++) {
//           str += " ";
//         }
//         for (let k = 0; k <=i; k++) {
//           str += k;
//         }
//         str += "\n";
//       }
//       console.log(str);
//     };
    

//        0
//       01
//      012
//     0123
//    01234
//   012345
//  0123456

// const triangle = (rows) => {
//       let str = "";
//       for (let i = 0; i <= rows; i++) {
//         for (let j = 0; j <= rows-i; j++) {
//           str += " ";
//         }
//         for (let k = 0; k <=i; k++) {
//           str += k;
//         }
//         str += "\n";
//       }
//       console.log(str);
//     };
    
//     triangle(6);
    


// 0123456
// 012345
//  01234
//   0123
//    012
//     01
//      0
// const triangle = (rows) => {
//       let str = "";
//       for (let i = 0; i <= rows; i++) {
//         for (let j = 0; j <=i; j++) {
//           str += " ";
//         }
//         for (let k = 0; k <=rows-i; k++) {
//           str += k;
//         }
//         str += "\n";
//       }
//       console.log(str);
//     };
    
//     triangle(6);
    


