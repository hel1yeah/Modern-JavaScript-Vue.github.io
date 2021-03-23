const container = document.querySelector('.container'),
  name = document.querySelector('.name'),
  email = document.querySelector('.email'),
  phone = document.querySelector('.phone'),
  website = document.querySelector('.website'),
  button = document.querySelector('.button-on')

const form = document.querySelector('form')
button.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('button-on')) {
    console.log('name');
  }
});


