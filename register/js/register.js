

var load = document.getElementById("loader");
load.style.display="none";
function register(str) {
    preventDefault();
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         // document.getElementById("txtHint").innerHTML = this.responseText;
         
        }
      }
      xmlhttp.open("GET", "../phpFiles/docdata.php", true);
      xmlhttp.send();
  }




  document.getElementById('regform').onsubmit=function(e){
    e.preventDefault();
   
   
    username = document.getElementById('name').value;
    password = document.getElementById('password').value;
    imr = document.getElementById('imr').value;
    state = document.getElementById('state').value;
    district = document.getElementById('district').value;
    email = document.getElementById('email').value;
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         a = this.responseText;
        
        var s = a.slice(0,1); 
        link =a.slice(2);
       
         if(s==1){
           
          sendEmail(link);
         
            clr();
            //window.location.href = "http://www.w3schools.com";
            
         }
         else{
          
            document.getElementById("success1").innerHTML = a;

         }
          
        }
      }
      xmlhttp.open("POST", "../register/phpFiles/docdata.php?name=" +username + "&password="+password + "&imr="+imr + "&state="+state + "&district="+district +"&email="+email, true);
      xmlhttp.send();
    
  }


  document.getElementById('loginform').onsubmit=function(e){
    e.preventDefault();
    
    lusername = document.getElementById('lname').value;
    lpassword = document.getElementById('lpassword').value;
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
         document.getElementById("success").innerHTML = this.responseText;
          
        }
      }
      xmlhttp.open("POST", "../register/phpFiles/login.php?name=" +lusername + "&password="+lpassword , true);
      xmlhttp.send();
    
  }
  function clr(){
    document.getElementById("success1").innerHTML = " ";
    document.getElementById("success").innerHTML = " ";
  }

  function sendEmail(link) {
    load.style.display="initial";
	Email.send({
		Host: "smtp.gmail.com",
		Username: "web.immunicare@gmail.com",
		Password: "Bhuvanesh",
		To: 'bhuvanesh2000appa@gmail.com',
		From: "Know Your Patient<web.immunicare@gmail.com>",
		Subject: "Immunicare Password",
		Body: link+"Please Click this link to verify"
	})
		.then(function (message) {
      load.style.display="none";
      swal("Verificaation mail sent!", "Check Your Mail ID!", "success");
		});
	}