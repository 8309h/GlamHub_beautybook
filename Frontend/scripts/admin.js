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
// const contentBox = document.getElementById("contentBox");
// const readBtn = document.getElementById("readBtn");

readBtn.addEventListener("click", () => {
  contentBox.innerHTML = "";

  contentBox.innerHTML = `
    <div id="readbox">
      <form>
        <input type="text" placeholder="Search" id="searchbox">
        <button type="button" onclick="getSalons()">Search</button>
      </form>
      <div id="resultsBox">
        search results
      </div>
    </div>
  `;
  
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
        <img src=${ele.image} />
        <h1>${ele.name}</h1>
        <p>${ele.address}</p>
        <h4>${ele.contact}</h4>
        <h3>${ele.city}</h3>
      </div>`;

    resultsBox.innerHTML += html;
  });
}


updateBtn.addEventListener("click",()=>{
    contentBox.innerHTML=""

    contentBox.innerHTML=`
        <form>
            <input type="text" placeholder="Solan Name">
            <input type="text" placeholder="Address">
            <input type="text" placeholder="Contact no.">
            <input type="text" placeholder="City">
            <button>update</button>
        </form>
    `;
})

deleteBtn.addEventListener("click",()=>{
    contentBox.innerHTML=""

    contentBox.innerHTML=`
        <form>
            <input type="text" placeholder="Enter Solan name">
            <button>Remove</button>
        </form>
    `;
})

