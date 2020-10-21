// Query selectors
let addContactBtn = document.querySelector('#register-btn');
let displayContactBtn = document.querySelector('#display-btn');
let emailInput = document.querySelector('#email');
let nameInput = document.querySelector('#name');
let form = document.querySelector('form');
let displayArea = document.querySelector('.display-area');

// Event listeners
addContactBtn.addEventListener('click', storeFormData);
displayContactBtn.addEventListener('click', displayContacts);

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
  contacts = retreiveContactsObj()

  contacts[name] = email;

  contacts = JSON.stringify(contacts);
  localStorage.setItem('contacts', contacts);
}

function retreiveContactsObj() {
  let contacts = localStorage.getItem('contacts');
  return JSON.parse(contacts);
}

function displayContacts() {
  let contacts = retreiveContactsObj();
  let contactsOL = document.createElement('ol');

  for (let key in contacts ) {
    let li = document.createElement('li');
    li.innerText = `${key}: ${contacts[key]}`;
    contactsOL.appendChild(li);
  }

  displayArea.appendChild(contactsOL);
}