import getRandomArbitrary from './randomNum';

function nap() {
  let energy = Number(document.querySelector('#energy').innerHTML);
  energy = Math.min(energy + getRandomArbitrary(20, 30), 100);
  document.querySelector('#energy').innerHTML = `${energy}`;
}

function slumber() {
  let energy = Number(document.querySelector('#energy').innerHTML);
  energy = Math.min(energy + getRandomArbitrary(60, 80), 100);
  document.querySelector('#energy').innerHTML = `${energy}`;
}

export { nap, slumber };
