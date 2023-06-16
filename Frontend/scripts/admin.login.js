const email=document.getElementById("email");
const password=document.getElementById("password");
const key=document.getElementById("key");
const loginBtn=document.getElementById("loginBtn")

loginBtn.addEventListener("click",async(e)=>{
    e.preventDefault();

    let obj={
        email:email.value,
        password:password.value,
        key:key.value
    }

    fetch("",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>alert("Login failed"))
})