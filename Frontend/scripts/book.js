window.addEventListener('DOMContentLoaded', function() {
    const defaultOption = document.querySelector('.option');
    defaultOption.classList.add('active');
  });
   



  function toggleOption(option) {
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
      option.classList.remove('active');
    });

    option.classList.add('active');
  }

  function openPopup() {
    const popup = document.getElementById('popup');
    const body = document.getElementById("body")
    const maindiv = document.querySelector(".main-div")   
    maindiv.style.display='none';
    body.classList.add("bodydim")
    popup.classList.add('active');
  }

  function closePopup() {
    const popup = document.getElementById('popup');
    const maindiv = document.querySelector(".main-div")
    maindiv.style.display='block';
    popup.classList.remove('active');
    body.classList.remove('bodydim');
  }