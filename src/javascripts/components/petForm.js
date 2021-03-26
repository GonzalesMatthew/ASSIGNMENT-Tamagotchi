const petForm = () => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="submit-pet-form" class="mb-4">
      <div class="form-group">
        <label for="petName">Name</label>
        <input type="text" class="form-control" id="petName" placeholder="Enter Name" required>
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input type="url" class="form-control" id="image" placeholder="Pet Url" required>
      </div>
      <button type="submit" id="submit-pet" class="btn btn-primary">Digitize</button>
    </form>`;
};

export default petForm;
