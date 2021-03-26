import getRandomArbitrary from './randomNum';

function superFun() {
  let fun = Number(document.querySelector('#fun').innerHTML);
  fun = Math.min(fun + getRandomArbitrary(20, 35), 100);
  document.querySelector('#fun').innerHTML = `${fun}`;
}

function slightlyFun() {
  let fun = Number(document.querySelector('#fun').innerHTML);
  fun = Math.min(fun + getRandomArbitrary(3, 7), 100);
  document.querySelector('#fun').innerHTML = `${fun}`;
}

export { superFun, slightlyFun };
