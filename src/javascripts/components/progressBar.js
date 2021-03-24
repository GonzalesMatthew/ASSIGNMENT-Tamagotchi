import printToDom from '../helpers/printToDom';

function progressBar() {
  const domString = `
  <div class="card text-center">
            <div class="card-header">
              Overall
            </div>
            <div class="card-body">
              <h5 id="score" class="card-title"></h5>
            </div>
          </div>`;
  printToDom('#progress', domString);
}

export default progressBar;
