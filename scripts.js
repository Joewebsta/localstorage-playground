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
  
  let contacts = { [name]: email };
  let contactObj = JSON.stringify(contacts);

  localStorage.setItem('contacts', contactObj);

  console.log(localStorage);
}
