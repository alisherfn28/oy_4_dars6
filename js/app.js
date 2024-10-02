//1-masala;

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

//2-masala;

// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

//3-masala;

// let num = +prompt("1-sonni kiriting");

// for (let i = 1; i <= num ** 2; i++) {
//   console.log(i);
// }

//4-masala;

// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

//5-masala;

// for (let i = 1; i <= 15; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

//6-masala;

// for (let i = 1; i <= 5; i++) {
//   let num = +prompt(`${i} - sonni kiriting`);
//   console.log(num);
// }

//7-masala;

// for (let i = 15; i >= 5; i--) {
//   console.log(i);
// }

//8-masala;

// let num = prompt("Sonni kiriting:");

// for (let i = 1; i <= num; i++) {
//   console.log(`${num} * ${i} = ${num * i}`);
// }

//9-masala;

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   let num = prompt(`${i} - sonni kiriting`);
//   sum += num;
//   console.log(sum);
// }

let sum = 0;

for (let i = 1; i <= 10; i++) {
  let num = prompt(`${i}-sonni kiriting:`); // Kiritilgan sonni olish
  sum += +num; // Kiritilgan sonni yig'indiga qo'shamiz
}

console.log(`Kiritilgan 10 ta sonning yig'indisi: ${sum}`);
