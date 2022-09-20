let array = [23, 45, 32, 5, 87, 7, 3, 98].sort(function (x, y) {
  return y - x;
});
console.log(array);

array = [23, 45, 32, 5, 87, 7, 3, 98];
let maxvalue = array.sort((x, y) => y - x)[0];
console.log(maxvalue);

array = [23, 45, 32, 5, 87, 7, 3, 98];
let minvalue = array.sort((x, y) => x - y)[0];
console.log(minvalue);
