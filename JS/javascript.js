// function validate_email()  
// {  
// var x=document.getElementById("email-id").value;  
// var atposition=x.indexOf("@");  
// var dotposition=x.lastIndexOf(".");  
// if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
//  // alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
//   document.getElementById("email-id_error_show").innerHTML='Please Enter Valid Email'
//   //return false;  
//   }  
// } 
function varify_details(){
	var name = document.getElementById("email-id").value;
	var password = document.getElementById("password").value;
	var x=document.getElementById("email-id").value;  
	var atposition=x.indexOf("@");  
	var dotposition=x.lastIndexOf(".");  
	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        // alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        document.getElementById("email-id_error_show").innerHTML='Please Enter Valid Email'
  //return false;  
}  
else if(name !=''){
	if(password.length>5){
		alert('Welcome You Have Loged In');
	}else{
		document.getElementById("password_error_show").innerHTML='Please Enter password Grater than 5 digit';
	}
}else{
	    document.getElementById("email-id_error_show").innerHTML='Please Enter Your Email-id Here';
}
}