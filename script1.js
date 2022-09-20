let array = ["academy", "of", "digital", "industries"].reduce(function (
  accumulator,
  currentvalue
) {
  return accumulator + " ".concat(currentvalue);
},
"");
console.log(array);
