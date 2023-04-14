function hello(name) {
  return `hello ${name}`;
}


function coins (n_Nickle, n_Dime, n_Quarter, n_Loonie, n_Toonie){

  var n_Total;

  n_Total = (n_Nickle * (0.05)) + (n_Dime * (0.10)) + (n_Quarter * (0.25)) + (n_Loonie * (1)) + (n_Toonie * (2));

  return Number(n_Total);
}

function fahrenheit2celsius (n_fahrenheit) {
  var n_celsius;

  n_celsius = (n_fahrenheit - 32) * (5/9);

  return Number(n_celsius.toFixed(2));
}

function gymmembership (n_cost, n_friends) {
  var n_Discount;
  var n_Total;

  if (n_friends == 0){
    n_Discount = 0;
  }
  else if (n_friends == 1){
    n_Discount = 0.05;
  }
  else if (n_friends == 2){
    n_Discount = 0.10;
  }
  else if (n_friends >= 3){
    n_Discount = 0.15;
  }
  else {
    n_Discount = 0;
  }

  n_Total = n_cost - (n_cost * n_Discount);

  return Number(n_Total);
}

export { hello, coins, fahrenheit2celsius, gymmembership };
