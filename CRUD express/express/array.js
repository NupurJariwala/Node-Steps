let arr = [
  { title: "product1", price: "100", id: "1" },
  { title: "product2", price: "200", id: "2" },
  { title: "product3", price: "300", id: "3" },
  { title: "product4", price: "400", id: "4" },
];

arr[2] = { ...arr[2], price: "799" };
console.log(arr);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
  if (array[i] == 7) {
    console.log(i);
  }
}

let index = array.findIndex((el) => el == 7);
console.log(index);

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//output =>[1,2,3,4,5,6,7,8,10]

let newarr = [];
arr1.forEach((el, index) => {
  if (el != 9) {
    console.log(el); //not in array form
    newarr.push(el); //convert in array form
  }
});

console.log(newarr);

const newarra1 = arr1.filter((el, index) => el != 9);
console.log(newarra1);
