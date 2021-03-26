import getRandomArbitrary from './randomNum';

function wholeFoods() {
  let full = Number(document.querySelector('#full').innerHTML);
  full = Math.min(full + getRandomArbitrary(6, 10), 100);
  document.querySelector('#full').innerHTML = `${full}`;
}

function junkFood() {
  let full = Number(document.querySelector('#full').innerHTML);
  full = Math.max(full - getRandomArbitrary(3, 7), 0);
  document.querySelector('#full').innerHTML = `${full}`;
}

export { wholeFoods, junkFood };
