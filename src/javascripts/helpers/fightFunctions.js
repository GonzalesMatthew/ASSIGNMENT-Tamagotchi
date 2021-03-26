import getRandomArbitrary from './randomNum';

function runAway() {
  let strength = Number(document.querySelector('#strength').innerHTML);
  strength = Math.min(strength + getRandomArbitrary(1, 3), 100);
  document.querySelector('#strength').innerHTML = `${strength}`;
}

function attack() {
  let strength = Number(document.querySelector('#strength').innerHTML);
  strength = Math.max(strength - getRandomArbitrary(7, 12), 0);
  document.querySelector('#strength').innerHTML = `${strength}`;
}
export { runAway, attack };
