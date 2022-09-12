const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Strings
const owners = ['lokesh', 'dhanaji', 'ajinkya', 'dhanaji', 'kartik', 'shaunak'];
console.log(owners.sort());
//[ 'ajinkya', 'dhanaji', 'dhanaji', 'kartik', 'lokesh', 'shaunak' ]
console.log(owners); //mutate the array with updation
//['ajinkya', 'dhanaji', 'dhanaji', 'kartik', 'lokesh', 'shaunak'];

//Numbers
console.log(movements);

//return < 0,A,B (keep order)
//return > 0,B,A (switch order)

//Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);
// [-650, -400, -130, 70, 200, 450,1300, 3000]

//descending order
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);

console.log(movements);
// [3000, 1300, 450, 200, 70, -130, -400, -650];
