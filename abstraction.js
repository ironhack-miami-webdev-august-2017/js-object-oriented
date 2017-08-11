// A = P (1 + r/n)^nt

function compoundInterest (P, r, n, t) {
  var A = P * Math.pow(1 + r / n,  n * t);
  return Math.round(A);
}

console.log( compoundInterest(156000, 0.05, 12, 5) );
console.log( compoundInterest(87000, 0.05, 12, 5) );
console.log( compoundInterest(35000, 0.05, 12, 5) );


for (var i = 1; i <= 10; i += 1) {
  var total = compoundInterest(35000, 0.05, 12, i);
  var interest = total - 35000;
  console.log(i + ' years will result in paying an extra $' + interest);
}
