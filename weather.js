var loginEmails;
var loginPsws;
var emailId;
var password;
var getEmail;
var getPassword;
var getEmailDash;
var name;
function submit() {
    
    name = document.getElementById("name").value;
    emailId = document.getElementById("email").value;
    password= document.getElementById("password").value;


    window.localStorage.setItem('fullNames', name);
    window.localStorage.setItem('emailIds', emailId);
    window.localStorage.setItem('psw', password);
    
    if (name !=null && emailId != null && password !=null){
   
        window.location.href = "login.html";
        return true;
    }else{

       return false;
    }
    
   


}

function loginFn(){
    getEmail = localStorage.getItem("emailIds");
    getPassword = localStorage.getItem("psw");

    loginEmails = document.getElementById("loginEmail").value;
    loginPsws = document.getElementById("loginPsw").value;

    if (getEmail == loginEmails && getPassword == loginPsws) {
        window.location.href = "weather.html";
        return true;
    } else {    
       return false;
    }
}


// function loadWeather () {
    var cityName = "Cuttack";
var key = "8d2de98e089f1c28e1a22fc19a24ef04";

link = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&apikey=" + key;
var request = new XMLHttpRequest();
request.open('GET', link, true);

request.onload = function () {

    obj = JSON.parse(this.response);


    if (request.status >= 200 && request.status < 400) {

        temp = obj.main.temp;
        visibility = obj.visibility;
      
        document.getElementById("temperature").innerHTML = temp;
        document.getElementById("visibility").innerHTML = visibility;
    }
    else {
        console.log("The city doesn't exist! Kindly check");
    }
}
request.send();
// }

function dashBoardFn(){
    getFullNames = localStorage.getItem("fullNames");
    document.getElementById("fullNames").innerHTML = getFullNames;

   
}




function resetLocalStorage(){


    localStorage.clear();

}

function logoutFn() {


    getEmail="";
    getPassword="";
    if (getEmail == "" && getPassword =="" ){
        window.location.href = "Login.html";
        return true;
    }else{

        
    }

}

