window.addEventListener('DOMContentLoaded', function() {
    const defaultOption = document.querySelector('.option');
    defaultOption.classList.add('active');
    const popup = document.getElementById('popup');
    popup.classList.add('active');
    const body = document.getElementById("body")
    body.classList.add("bodydim")
    const maindiv = document.querySelector(".main-div")   
    maindiv.style.display='none';
    
  });
   fetchRenderInScrollBar()
   
  const centerName = document.getElementById("centerName")



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
  
  const scrollbarDiv = document.getElementById("scrollable-div")
  
  
   function fetchRenderInScrollBar(){

   

    //  fetch('http://localhost:4000/admin/salons',{
    //   method: "POST", 
    //   headers: {
    //   "Content-Type": "application/json",
    //     }
    //  })
    //  .then(response => response.json())
    //  .then(data => {
    //    // Render salon details in the scrollable div
    //    const scrollableDiv = document.getElementById('scrollable-div');
 
    //    data.forEach(salon => {
    //      const salonName = salon.name;
    //      const salonAddress = salon.address;
    //      const salonContact = salon.contact;
    //      const salonCity = salon.city;
 
    //      // Create a div element for the salon details
    //      const salonDiv = document.createElement('div');
    //      salonDiv.classList.add('salon-details');
 
    //      // Create and append elements for name, address, contact, and city
    //      const nameElement = document.createElement('h2');
    //      nameElement.textContent = salonName;
    //      salonDiv.appendChild(nameElement);
 
    //      const addressElement = document.createElement('p');
    //      addressElement.textContent = `Address: ${salonAddress}`;
    //      salonDiv.appendChild(addressElement);
 
    //      const contactElement = document.createElement('p');
    //      contactElement.textContent = `Contact: ${salonContact}`;
    //      salonDiv.appendChild(contactElement);
 
    //      const cityElement = document.createElement('p');
    //      cityElement.textContent = `City: ${salonCity}`;
    //      salonDiv.appendChild(cityElement);
 
    //      // Add event listener to the salon div
    //      salonDiv.addEventListener('click', () => {
    //        // Perform the desired action when the div is clicked
    //        console.log(`Salon ${salonName} clicked!`);
    //      });
 
    //      // Append the salon div to the scrollable div
    //      scrollableDiv.appendChild(salonDiv);
    //    });
    //  })
    //  .catch(error => {
    //    console.error('Error:', error);
    //  });
    // fetch('localhost:4000/admin/salons', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle the response data here
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
  }
  
  
  
  
  
  
  
