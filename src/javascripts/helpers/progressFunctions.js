function progress() {
  const components = [
    Number(document.querySelector('#fun').innerHTML),
    Number(document.querySelector('#energy').innerHTML),
    Number(document.querySelector('#full').innerHTML),
    Number(document.querySelector('#strength').innerHTML)
  ];
  // eslint-disable-next-line prefer-const
  let totalScore = components.reduce((a, b) => a + b, 0);
  // eslint-disable-next-line prefer-const
  let score = Math.floor(totalScore / 4);
  document.querySelector('#score').innerHTML = `${score}`;
}

document.querySelector('body').addEventListener('click', progress);

export default progress;
