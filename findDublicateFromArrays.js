A = [1, 5, 10, 20, 40, 80]

B = [6, 7, 20, 80, 100]

C = [3, 4, 15, 20, 30, 70, 80, 120]


const newArray=A.filter(val=>B.includes(val));

const dublicateVlue=C.filter(val=>newArray.includes(val))
console.log(dublicateVlue)