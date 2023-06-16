let contentBox=document.querySelector(".display-content-box")
let addBtn=document.getElementById("addBtn")
let readBtn=document.getElementById("readBtn")
let updateBtn=document.getElementById("updateBtn")
let deleteBtn=document.getElementById("deleteBtn")

window.onload =()=>{
    contentBox.innerHTML=""
    contentBox.innerHTML=`<h1>WELCOME TO GLAMGURU ADMINSIDE</h1>`;
}

//Add form======================================================
addBtn.addEventListener("click", () => {
    contentBox.innerHTML = "";

    contentBox.innerHTML = `
        <form id="yourFormId">
            <h3>ADD NEW SALON</h3>

            <input type="text" placeholder="Salon Image" id="salon_image" required>
            <input type="text" placeholder="Salon Name" id="salon_name" required>
            <input type="text" placeholder="Address" id="salon_address" required>
            <input type="number" placeholder="Contact" id="salon_number" required>
            <input type="text" placeholder="City" id="salon_city" required>

            <div class="multiselect">
                <div class="selectBox1" onclick="showCheckboxes1()">
                    <select>
                        <option>Select Hair Services</option>
                    </select>
                    <div class="overSelect1"></div>
                </div>
                <div id="checkboxes1">
                <label for="Hair cut">
                <input type="checkbox" id="Hair cut" />Hair cut
                </label>
                <label for="Hair Wash">
                    <input type="checkbox" id="Hair Wash" />Hair Wash
                </label>
                <label for="Hair Color">
                    <input type="checkbox" id="Hair Color" />Hair Color
                </label>
                </div>
            </div>

            <div class="multiselect">
                <div class="selectBox2" onclick="showCheckboxes2()">
                    <select>
                        <option>Select Face Services</option>
                    </select>
                    <div class="overSelect2"></div>
                </div>
                <div id="checkboxes2">
                <label for="Face Mask">
                    <input type="checkbox" id="Face Mask" />Face Mask
                </label>
                <label for="Face/body massage">
                    <input type="checkbox" id="Face/body massage" />Face/body massage
                </label>
                <label for="Manicure & pedicure">
                    <input type="checkbox" id="Manicure & pedicure" />Manicure & pedicure
                </label>
                </div>
            </div>

            <div class="multiselect">
                <div class="selectBox3" onclick="showCheckboxes3()">
                    <select>
                        <option>Select Body Services</option>
                    </select>
                    <div class="overSelect3"></div>
                </div>
                <div id="checkboxes3">
                <label for="value 1">
                <input type="checkbox" id="value 1" />value 1
                </label>
                <label for="value 2">
                    <input type="checkbox" id="value 2" />value 2
                </label>
                <label for="value 3">
                    <input type="checkbox" id="value 3" />Value 3
                </label>
                </div>
            </div>

            <button type="button" onclick="getSelectedValues()">Submit</button>
        </form>
    `;
});

//firstbox======================
var expanded1 = false;

function showCheckboxes1() {
  var checkboxes1 = document.getElementById("checkboxes1");
  if (!expanded1) {
    checkboxes1.style.display = "block";
    expanded1 = true;
  } else {
    checkboxes1.style.display = "none";
    expanded1 = false;
  }
}

//secondbox======================
var expanded2 = false;

function showCheckboxes2() {
  var checkboxes2 = document.getElementById("checkboxes2");
  if (!expanded2) {
    checkboxes2.style.display = "block";
    expanded2 = true;
  } else {
    checkboxes2.style.display = "none";
    expanded2 = false;
  }
}

//thirdbox======================
var expanded3 = false;

function showCheckboxes3() {
  var checkboxes3 = document.getElementById("checkboxes3");
  if (!expanded3) {
    checkboxes3.style.display = "block";
    expanded3 = true;
  } else {
    checkboxes3.style.display = "none";
    expanded3 = false;
  }
}

async function getSelectedValues(event) {
    const salon_image = document.getElementById("salon_image");
    const salon_name = document.getElementById("salon_name");
    const salon_address = document.getElementById("salon_address");
    const salon_number = document.getElementById("salon_number");
    const salon_city = document.getElementById("salon_city");
    const checkboxes1 = document.querySelectorAll('#checkboxes1 input[type="checkbox"]');
    const checkboxes2 = document.querySelectorAll('#checkboxes2 input[type="checkbox"]');
    const checkboxes3 = document.querySelectorAll('#checkboxes3 input[type="checkbox"]');
    const selectedValuesFrom1Box = [];
    const selectedValuesFrom2Box = [];
    const selectedValuesFrom3Box = [];
  
    checkboxes1.forEach(checkbox => {
      if (checkbox.checked) {
        selectedValuesFrom1Box.push(checkbox.id);
      }
    });
  
    checkboxes2.forEach(checkbox => {
      if (checkbox.checked) {
        selectedValuesFrom2Box.push(checkbox.id);
      }
    });
  
    checkboxes3.forEach(checkbox => {
      if (checkbox.checked) {
        selectedValuesFrom3Box.push(checkbox.id);
      }
    });
  
    let obj = {
      image:salon_image.value,
      name: salon_name.value,
      address: salon_address.value,
      contact: salon_number.value,
      city: salon_city.value,
      services: {
        Hair: selectedValuesFrom1Box,
        Face: selectedValuesFrom2Box,
        Body: selectedValuesFrom3Box,
      }
    };
  
    try {
        await fetch(`http://localhost:4000/admin/register-salon`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
            }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                alert("Successfully registered!");
            })
            .catch((err) => {
                alert(err);
            });
    } catch (error) {
        alert(error)
    }

  }
  


//Get all users data============================================================

readBtn.addEventListener("click", () => {
  contentBox.innerHTML = "";

  contentBox.innerHTML = `
    <div id="readbox">
      <form>
        <input type="text" placeholder="Search" id="searchbox">
        <button type="button" onclick="getSalons()">Search</button>
      </form>
      <div id="resultsBox">
        <h3>Loading...</h3>
      </div>
    </div>
  `;

  getSalons()
  
});

async function getSalons() {
  const searchbox = document.getElementById("searchbox");
  const resultsBox = document.getElementById("resultsBox");

  try {
    const response = await fetch("http://localhost:4000/admin/salons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: searchbox.value })
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      Display(data, resultsBox);
    } else {
      throw new Error("Request failed.");
    }
  } catch (error) {
    alert(error);
  }
}

function Display(arr, resultsBox) {
    resultsBox.innerHTML = "";
  
    arr.forEach((ele) => {
      let html = `
        <div>
          <img src="https://media.istockphoto.com/id/134052142/photo/hair-salon-situation.jpg?s=612x612&w=0&k=20&c=HM4Tl3ATijpIS1Rv097UHwmZ3OfmqGXkniNLuTCqB0A=" />
          <h3>${ele.name}</h3>
          <p>${ele.address}</p>
          <p>${ele.contact}</p>
          <p>${ele.city}</p>
          <button onclick="editform('${ele.name}','${ele.city}')">Edit</button>
        </div>`;
  
      resultsBox.innerHTML += html;
    });
  }
  
  function editform(val1,val2) {
    console.log(val1,val2)
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  
//from here updation part starts============================================
// updateBtn.addEventListener("click",()=>{
//     contentBox.innerHTML=""

//     contentBox.innerHTML=`
//         <form>
//         <h1>Update Info</h1>
//         <input type="text" placeholder="Salon Name for Update" id="salon_name">
//         <input type="text" placeholder="Salon Image" id="update_salon_image">
//         <input type="text" placeholder="Address" id="update_salon_address">
//         <input type="number" placeholder="Contact" id="update_salon_contact">
//         <input type="text" placeholder="City" id="update_salon_city">
//         <select id="update-services">
//             <option disabled selected value="">Select Category</option>
//             <option value="Hair">Hair</option>
//             <option value="Body">Body</option>
//             <option value="Face">Face</option>
//         </select>
//         <input type="text" placeholder="Service Name" id="update_service">
//             <button onclick="updateSalon()">update</button>
//         </form>
//     `;
// })

// function updateSalon(){
//     const salonName=document.getElementById("salon_name").value;

//     const update_salon_image=document.getElementById("update_salon_image")
//     const update_salon_address=document.getElementById("update_salon_address")
//     const update_salon_contact=document.getElementById("update_salon_contact")
//     const update_salon_city=document.getElementById("update_salon_city")
//     const service_category=document.getElementById("update-services");
//     const service_value=document.
// }

deleteBtn.addEventListener("click",()=>{
    contentBox.innerHTML=""

    contentBox.innerHTML=`
        <form>
            <input type="text" placeholder="Enter Solan name">
            <button>Remove</button>
        </form>
    `;
})

