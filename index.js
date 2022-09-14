const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here



// this might be the key to the first one

// function sum(nums) {
//     let total = 0;
//     nums.forEach(function(i) {
//         total = total + i;
//     });
//     return total;
// }
// undefined
// sum([5, 10, 15]);
// 30

const totalBatteries = batteryBatches.reduce((accum, value) => {
    return accum + value;
}, 0)