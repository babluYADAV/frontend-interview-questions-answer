const sorter = (arr, type) => {
 if(type==="dsc"){
  return arr.sort((a, b) => (a > b ? -1 : 1));
 }else if(type==="asc"){
   return arr.sort()
 }
};
const array = ["Shiv", "David", "Ram", "Yadav"];
const type = "asc";

console.log(sorter(array, type));
