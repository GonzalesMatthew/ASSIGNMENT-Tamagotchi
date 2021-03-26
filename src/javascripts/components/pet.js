const digitizePet = (petObject) => {
  document.querySelector('#pet').innerHTML = `
    <div class="card  m-3 p-4 shadow-lg rounded">
      <h5 class="card-title">${petObject.name}</h5>
      <img class="card-img-top px-2 shadow-lg rounded overflow-hidden" src=${petObject.url} alt="picture of ${petObject.name}">
    </div>
  `;
};

export default digitizePet;
