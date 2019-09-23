document.forms["temperature_form"].onsubmit = function(){
    var day=document.getElementById("day")
    var month=document.getElementById("month")
    var year=document.getElementById("year")
    var male=document.getElementById("male")
    var female=document.getElementById("female")
    var result=document.getElementById("result")
}


function a(){
    var dates=new Date(birthday.value)
    var day=dates.getDay();
}
if (day<=0){
    alert("Invalid Day");
}
if (day>31){
    alert("Invalid Day");
}
if (month<=0){
    alert("Invalid Month");
}
if (month>12){
    alert("Invalid Month");
}

if (result="female"){
    switch(day)
    {
        case 0:result.innerHTML="Akosua"; break;
        case 1:result.innerHTML="Adwoa"; break;
        case 2:result.innerHTML="Abenaa"; break;
        case 3:result.innerHTML="Akua"; break;
        case 4:result.innerHTML="Yaa"; break;
        case 5:result.innerHTML="Afua"; break;
        case 6:result.innerHTML="Ama"; break;
    }
    alert(day)
} else{
    switch(day)
    {
        case 0:result.innerHTML="Kwasi"; break;
        case 1:result.innerHTML="Kwadwo"; break;
        case 2:result.innerHTML="Kwabena"; break;
        case 3:result.innerHTML="Kwaku"; break;
        case 4:result.innerHTML="Yaw"; break;
        case 5:result.innerHTML="Kofi"; break;
        case 6:result.innerHTML="Kwame"; break;
    }
    alert(day)
}
    