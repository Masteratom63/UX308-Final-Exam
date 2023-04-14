import { hello, coins, fahrenheit2celsius, gymmembership } from '../src/functions.js';

function Hello() {
  return (
    <section>
      <h2>Results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>
  );
}

function Coins() {
  return (
    <section>
      <h2>Results</h2>
      <p>coins(0,0,0,0,0) == "{coins(0,0,0,0,0)}"</p>
      <p>coins(1,1,1,1,1) == "{coins(1,1,1,1,1)}"</p>
      <p>coins(3,7,4,5,9) == "{coins(3,7,4,5,9)}"</p>
    </section>
  );
}

function Temp() {
  return (
    <section>
      <h2>Results</h2>
      <p>fahrenheit2celsius(32) == "{fahrenheit2celsius(32)}"</p>
      <p>fahrenheit2celsius(212) == "{fahrenheit2celsius(212)}"</p>
      <p>fahrenheit2celsius(70) == "{fahrenheit2celsius(70)}"</p>
    </section>
  );
}

function Gym() {
  return (
    <section>
      <h2>Results</h2>
      <p>gymmembership(100,0) == "{gymmembership(100,0)}"</p>
      <p>gymmembership(100,1) == "{gymmembership(100,1)}"</p>
      <p>gymmembership(100,2) == "{gymmembership(100,2)}"</p>
      <p>gymmembership(100,3) == "{gymmembership(100,3)}"</p>
      <p>gymmembership(100,4) == "{gymmembership(100,4)}"</p>
    </section>
  );
}

export { Hello, Coins, Temp, Gym };
