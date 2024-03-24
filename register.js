let un=document.getElementById("email");
let pass=document.getElementById("password");
let add=document.getElementById("address");
let gd=document.getElementById("graduation");
let bran=document.getElementById("branch");
let yop=document.getElementById("yop");

function registerUser(){
	let userData={
		username:un.value,
		password:pass.value,
		address:add.value,
		gradution:gd.value,
        branch:bran.value,
        yop:yop.value
	}
	saveData(userData);
	clearField();
	open("login1.html");
}
function clearField(){
	un.value="";
	pass.value="";
	add,value="";
	gd.value="";
	bran.value="";
	yop.value="";
}
function saveData(userData){
	localStorage.setItem("userData",JSON.stringify(userData));
}