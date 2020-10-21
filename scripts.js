// Query selectors
let addContactBtn = document.querySelector('#register-btn');
let displayContactBtn = document.querySelector('#display-btn');
let emailInput = document.querySelector('#email');
let nameInput = document.querySelector('#name');
let form = document.querySelector('form');

// Event listeners
addContactBtn.addEventListener('click', storeFormData);

// Functions

function storeFormData(){
  if (isEmpty()) { createContactsObj(); }
  updateContactsObj(nameInput.value, emailInput.value);
  form.reset();
}

function isEmpty() {
  return localStorage.length === 0;
}

function createContactsObj() {
  localStorage.setItem('contacts', JSON.stringify({}));
}

function updateContactsObj(name, email) {
  let contacts = localStorage.getItem('contacts');
  contacts = JSON.parse(contacts);
  contacts[name] = email;

  contacts = JSON.stringify(contacts);
  localStorage.setItem('contacts', contacts);
}