import printToDom from '../helpers/printToDom';

function appBuilder() {
  document.querySelector('#app').classList.add('border', 'border-dark', 'border-5', 'rounded');
  const domString = `
  <div class="d-flex justify-content-center">
  <button type="button" class="btn btn-primary" id="namePet" data-toggle="collapse" data-target="#formContainer">Name Pet</button>
  </div>
  <div id="formContainer" class="d-flex justify-content-center"></div>
  <div id="pet" class="d-flex justify-content-center"></div>
  
  <div id="progress"></div>
  
  
  <div class='container'>
    <div class='row'>
    
      <div id="eat" class="quad col-sm m-1 p-4"></div>
    
     <div id="play" class="quad col-sm m-1 p-4"></div>
    
    </div>
    
    <div class='row'>
    
      <div id="fight" class="quad col-sm m-1 p-4"></div>
    
      <div id="sleep" class="quad col-sm m-1 p-4"></div>
    
    </div>
  </div>
`;
  printToDom('#app', domString);
}

export default appBuilder;
