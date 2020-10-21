// Query selectors
let addContactBtn = document.querySelector('#register-btn');
let displayContactBtn = document.querySelector('#display-btn');
let emailInput = document.querySelector('#email');
let nameInput = document.querySelector('#name');

// Event listeners
addContactBtn.addEventListener('click', storeFormData);


// Functions

function storeFormData(){
  let email = emailInput.value;
  let name = nameInput.value;
  
  if (!localStorage.length) {
    localStorage.setItem('contacts', JSON.stringify({}));
  }

  let contacts = localStorage.getItem('contacts');
  contacts = JSON.parse(contacts);
  contacts[name] = email;

  contacts = JSON.stringify(contacts);
  localStorage.setItem('contacts', contacts)

  console.log(localStorage);
}
