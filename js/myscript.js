 function init(){
	var name = document.forms["formdata"]["fullName"];               
    var email = document.forms["formdata"]["Email"];
	var movietitle = document.getElementById("inputmovietitle").value;
	var seats = document.getElementById("inputseats").value;
	
	 if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    }else if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } else{
	return true; }
 }