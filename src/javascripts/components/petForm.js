const petForm = () => {
  document.querySelector('#formContainer').innerHTML = `
    <form id="submit-pet-form" class="mb-4">
      <div class="form-group">
        <label for="petName">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter Name" required>
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input type="url" class="form-control" id="url" placeholder="Pet Url" required>
      </div>
      <button type="submit" id="submit-pet" class="btn btn-primary">Digitize</button>
    </form>`;
};

export default petForm;
