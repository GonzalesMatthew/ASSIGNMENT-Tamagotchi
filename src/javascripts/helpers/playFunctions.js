import getRandomArbitrary from './randomNum';

function superFun() {
  let fun = Number(document.querySelector('#fun').innerHTML);
  fun = Math.min(fun + getRandomArbitrary(20, 35), 100);
  document.querySelector('#fun').innerHTML = `${fun}`;

  let full = Number(document.querySelector('#full').innerHTML);
  full = Math.max(full - getRandomArbitrary(7, 12), 0);
  document.querySelector('#full').innerHTML = `${full}`;

  let energy = Number(document.querySelector('#energy').innerHTML);
  energy = Math.max(energy - getRandomArbitrary(7, 12), 0);
  document.querySelector('#energy').innerHTML = `${energy}`;
}

function slightlyFun() {
  let fun = Number(document.querySelector('#fun').innerHTML);
  fun = Math.min(fun + getRandomArbitrary(3, 7), 100);
  document.querySelector('#fun').innerHTML = `${fun}`;

  let strength = Number(document.querySelector('#strength').innerHTML);
  strength = Math.min(strength + getRandomArbitrary(12, 15), 100);
  document.querySelector('#strength').innerHTML = `${strength}`;

  let energy = Number(document.querySelector('#energy').innerHTML);
  energy = Math.max(energy - getRandomArbitrary(3, 4), 0);
  document.querySelector('#energy').innerHTML = `${energy}`;
}

export { superFun, slightlyFun };
