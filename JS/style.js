// function first_function(niku){
// alert(niku + niku);
// }

// function printvalue(){
// 	var name = document.myform.name.value;
// 	if(name == ''){
// 		alert('enter a value');
// 		return false;
// 	}
// 	if(name >=50){
// 		alert('number is grater than 50');
// 		alert(name);
// 		return true;
// 	}
// 	else if(name >=30 && name<50)
// 	{
// 		alert('number is betwenn 30 and 50');
// 		alert(name);
// 		return true;
// 	}else{
// 		alert('number is less than 30');
// 		alert(name);
// 		return true;
// 	}
// }


// function printvalue(){
// 	var pass = document.myform.password.value;
// }

// function printvalue(){
// 	var name = document.getElementById("input-name").value;
// 	if(name == '')
// 	{
// 		alert('please enter your name');
// 		//return false;
// 	}else{
// 		alert(name);
// 		//return true;
// 	}
// 	var pass = document.myform.password.value;
// 	var check = pass.length;
// 	// alert(check);
// 	if(check>=11 || check<=9){
// 		alert('Enter 10 digit number');
// 		//return false;
// 	}
// 	else{
// 		alert(check);
// 		//return true;
// 	}
// }

// email validation

// function printvalue()  
// {  
// var x=document.myform.email.value;  
// var atposition=x.indexOf("@");  
// var dotposition=x.lastIndexOf(".");  
// if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
//   alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
//   return false;  
//   }  
// }  

// function printvalue()
// {
// 	var em = document.myform.email.value;
// 	let l= em.length;
// 	let i =0;
// 	let count = 0;
// 	for(i=0;i<l;i++){
// 		if(em == '@' || em =='gmail' || em =='.' || em =="com"){
// 			count++;
// 		}
// 		else{
// 			count = 0;
// 		}
// 	}
// 	if(count==0){
// 		alert('enter invalid email');
// 	}
// 	else{
// 		alert('Email You Enter is valid');
// 	}
// }


//inner html

// function printvalue() {
// 	var pass = document.getElementById("input-name").value;
// 	var name = document.getElementById("password").value;
// 	if(name == ''){
// 		document.getElementById("p1").innerHTML='Please enter your password';
// 		//alert('enter invalid password');
// 		return false;
// 	}else{
// 		//alert('you entered your password');
// 		return true;
// 	}
// }
// function printvalue() {
// //	var name = document.getElementById("pass").value;
// 	//var len = name.length;
// 	var msg;
// 	if(document.myform.password.value.length>5){
// 		msg="Strong";
// 	}else{
// 		msg = "Poor";
// 	}
// 	document.getElementById('mylocation').innerText=msg;
// }

/*
validate form
*/
function validate(){
	var name = document.getElementById("input-name").value;
	var passA = document.getElementById("password").value;
	var passB = document.getElementById("confirm-password").value;
	if(name != ''){
		if(passA!=passB){
			document.getElementById("check-password").innerHTML='Password Not Matched';
		}
		else{
			alert('Welcome You Have Loged in');
		}
	}
	else{
		document.getElementById("check-name").innerHTML='Please Enter Here';
		//alert('fail');
	}	
}


// Jqueiry implementation

// $(document).ready(function(){
// 	$()
// });

// cookies 

