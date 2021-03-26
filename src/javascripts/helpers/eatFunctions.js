import getRandomArbitrary from './randomNum';

function wholeFoods() {
  let full = Number(document.querySelector('#full').innerHTML);
  full = Math.min(full + getRandomArbitrary(18, 26), 100);
  document.querySelector('#full').innerHTML = `${full}`;

  let strength = Number(document.querySelector('#strength').innerHTML);
  strength = Math.min(strength + getRandomArbitrary(23, 35), 100);
  document.querySelector('#strength').innerHTML = `${strength}`;

  let energy = Number(document.querySelector('#energy').innerHTML);
  energy = Math.max(energy - getRandomArbitrary(8, 11), 0);
  document.querySelector('#energy').innerHTML = `${energy}`;
}

function junkFood() {
  let full = Number(document.querySelector('#full').innerHTML);
  full = Math.max(full - getRandomArbitrary(3, 7), 0);
  document.querySelector('#full').innerHTML = `${full}`;

  let fun = Number(document.querySelector('#fun').innerHTML);
  fun = Math.min(fun + getRandomArbitrary(4, 12), 100);
  document.querySelector('#fun').innerHTML = `${fun}`;

  let energy = Number(document.querySelector('#energy').innerHTML);
  energy = Math.max(energy - getRandomArbitrary(6, 10), 0);
  document.querySelector('#energy').innerHTML = `${energy}`;
}

export { wholeFoods, junkFood };
