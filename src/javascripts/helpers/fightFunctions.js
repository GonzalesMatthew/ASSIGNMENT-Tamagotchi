import getRandomArbitrary from './randomNum';

function runAway() {
  let strength = Number(document.querySelector('#strength').innerHTML);
  strength = Math.min(strength + getRandomArbitrary(1, 3), 100);
  document.querySelector('#strength').innerHTML = `${strength}`;

  let energy = Number(document.querySelector('#energy').innerHTML);
  energy = Math.max(energy - getRandomArbitrary(3, 6), 0);
  document.querySelector('#energy').innerHTML = `${energy}`;

  let full = Number(document.querySelector('#full').innerHTML);
  full = Math.max(full - getRandomArbitrary(3, 5), 0);
  document.querySelector('#full').innerHTML = `${full}`;
}

function attack() {
  let strength = Number(document.querySelector('#strength').innerHTML);
  strength = Math.max(strength - getRandomArbitrary(7, 12), 0);
  document.querySelector('#strength').innerHTML = `${strength}`;

  let energy = Number(document.querySelector('#energy').innerHTML);
  energy = Math.max(energy - getRandomArbitrary(10, 20), 0);
  document.querySelector('#energy').innerHTML = `${energy}`;

  let full = Number(document.querySelector('#full').innerHTML);
  full = Math.max(full - getRandomArbitrary(8, 15), 0);
  document.querySelector('#full').innerHTML = `${full}`;
}
export { runAway, attack };
