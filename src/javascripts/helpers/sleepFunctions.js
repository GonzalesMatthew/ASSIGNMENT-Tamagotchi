import getRandomArbitrary from './randomNum';

function nap() {
  let energy = Number(document.querySelector('#energy').innerHTML);
  energy = Math.min(energy + getRandomArbitrary(20, 30), 100);
  document.querySelector('#energy').innerHTML = `${energy}`;

  let full = Number(document.querySelector('#full').innerHTML);
  full = Math.max(full - getRandomArbitrary(16, 22), 0);
  document.querySelector('#full').innerHTML = `${full}`;

  let strength = Number(document.querySelector('#strength').innerHTML);
  strength = Math.min(strength + getRandomArbitrary(33, 40), 100);
  document.querySelector('#strength').innerHTML = `${strength}`;

  let fun = Number(document.querySelector('#fun').innerHTML);
  fun = Math.min(fun + getRandomArbitrary(3, 4), 100);
  document.querySelector('#fun').innerHTML = `${fun}`;
}

function slumber() {
  let energy = Number(document.querySelector('#energy').innerHTML);
  energy = Math.min(energy + getRandomArbitrary(85, 100), 100);
  document.querySelector('#energy').innerHTML = `${energy}`;

  let full = Number(document.querySelector('#full').innerHTML);
  full = Math.max(full - getRandomArbitrary(45, 55), 0);
  document.querySelector('#full').innerHTML = `${full}`;

  document.querySelector('#strength').innerHTML = '80';

  document.querySelector('#fun').innerHTML = '50';
}

export { nap, slumber };
