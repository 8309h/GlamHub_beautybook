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
        <form>
            <h3>ADD NEW SALON</h3>
            <input type="text" placeholder="Salon Name" id="salon_name" required>
            <input type="text" placeholder="Address" id="salon_address" required>
            <input type="number" placeholder="Contact no." id="salon_number" required>
            <input type="text" placeholder="City" id="salon_city" required>

            <div class="multiselect">
                <div class="selectBox" onclick="showCheckboxes()">
                    <select>
                        <option>Select Services</option>
                    </select>
                    <div class="overSelect"></div>
                </div>
                <div id="checkboxes">
                    <label for="one">
                        <input type="checkbox" id="one" />Hair cut
                    </label>
                    <label for="two">
                        <input type="checkbox" id="two" />Hair Wash
                    </label>
                    <label for="three">
                        <input type="checkbox" id="three" />Hair Color
                    </label>
                    <label for="four">
                        <input type="checkbox" id="four" />Face Mask
                    </label>
                    <label for="five">
                        <input type="checkbox" id="five" />Face/body massage
                    </label>
                    <label for="Six">
                        <input type="checkbox" id="six" />Manicure & pedicure
                    </label>
                </div>
            </div>

            <button type="submit" onclick="clicked()">Submit</button>
        </form>
    `;
});


var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

function clicked(e){
    e.preventDefault()
    let solonName=document.getElementById("salon_name")
    let salonAddress=document.getElementById("salon_address")
    console.log(salonAddress.value,solonName.value)
}


//Get all users data============================================================
readBtn.addEventListener("click",()=>{
    contentBox.innerHTML=""

    contentBox.innerHTML=`
        <form>
            <input type="text" placeholder="Solan Name">
            <input type="text" placeholder="Address">
            <input type="text" placeholder="Contact no.">
            <input type="text" placeholder="City">
            <button>Search</button>
        </form>
    `;
})
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