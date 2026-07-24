const users = JSON.parse(localStorage.getItem("users")) || [];

async function hashPassword(password){

const data=new TextEncoder().encode(password);

const hash=await crypto.subtle.digest("SHA-256",data);

return Array.from(new Uint8Array(hash))
.map(b=>b.toString(16).padStart(2,"0"))
.join("");

}

const registerForm=document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",async function(e){

e.preventDefault();

const username=document.getElementById("username").value.trim();

const password=document.getElementById("password").value.trim();

const msg=document.getElementById("msg");

msg.innerHTML="";

if(username===""||password===""){

msg.innerHTML="All fields are required.";

return;

}

if(password.length<8||!/\d/.test(password)){

msg.innerHTML="Password must be at least 8 characters and contain one number.";

return;

}

if(users.find(u=>u.username===username)){

msg.innerHTML="User already exists.";

return;

}

const hashed=await hashPassword(password);

users.push({

username,

password:hashed

});

localStorage.setItem("users",JSON.stringify(users));

msg.style.color="green";

msg.innerHTML="Registration Successful.";

setTimeout(()=>{

location.href="login.html";

},1000);

});

}


const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",async function(e){

e.preventDefault();

const username=document.getElementById("loginUser").value.trim();

const password=document.getElementById("loginPass").value.trim();

const msg=document.getElementById("loginMsg");

if(username===""||password===""){

msg.innerHTML="All fields are required.";

return;

}

const hashed=await hashPassword(password);

const user=users.find(

u=>u.username===username&&u.password===hashed

);

if(!user){

msg.innerHTML="Invalid username/email or password.";

return;

}

localStorage.setItem("session",username);

location.href="dashboard.html";

});

}

if(location.pathname.includes("dashboard.html")){

const session=localStorage.getItem("session");

if(!session){

location.href="login.html";

}else{

document.getElementById("welcome").innerHTML=

"Welcome, "+session;

}

}

function logout(){

localStorage.removeItem("session");

location.href="login.html";

}
