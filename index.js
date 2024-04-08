// 13 - masala;

// function arr(str){
//     return str.split("").reverse().map(Number);
// }

// console.log(arr("34567"))

///////////////////////////////////////////////////////////////////

// 14 - masala;

// function rc(n) {
//     if (n === 0) {
//         return []
//     }
//     else if (n < 0) {
//         alert("xatolik; musbat son kiriting:")
//     }
//     else {
//         let arr = rc(n - 1);
//         arr.push(n);
//         return arr;
//     }
// }
// let n = +prompt("musbat son kiritin:");
// let c = rc(n);
// alert(c);

/////////////////////////////////////////////////////////////////

// 15 - masala;

// function sum_arr(n1, n2) {
//     let sum = 0;
//     n1.forEach(num => {
//         if (!isNaN(num)) {
//             sum += num;
//         }
//     }
//     )
//     n2.forEach(num => {
//         if (!isNaN(num)) {
//             sum += num;
//         }
//     }
//     )
//     return sum;
// }

// alert(sum_arr([1, "salom", 5, 7], [6, "hi", 8]))

//////////////////////////////////////////////////////

// 16 - masala;

// function min_number(arr) {
//     let mn = Infinity;
//     arr.forEach(num => {if (typeof num === 'number') {
//             mn = Math.min(mn, num)
//         }
//     }
//     )
//     return (Math.pow(mn, 4)).toString()
// }

// console.log(min_number([2, 3, 7, 8, 9, 12]))

////////////////////////////////////////////////////

// 17 - masala

// function rev_str(str) {
//     let rev = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         rev += str[i].toString()
//     }
//     return rev
// }

// alert(rev_str('Salom'))
