import formModal from '../components/formModal';
import petForm from '../components/petForm';

const namePet = () => {
  document.querySelector('#createPet').innerHTML = `
  <button class="btn btn-info shadow-lg" data-toggle="modal" data-target="#formModal" id="create-pet">Create Pet</button>
  `;
  formModal('Name Your Pet');
  petForm();
  console.warn('its firing');
};

export default namePet;
