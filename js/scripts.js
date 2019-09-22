var birthday=document.getElementById("birthday")
var male=document.getElementById("male")
var female=document.getElementById("female")
var result=document.getElementById("result")

function a(){
    var dates=new Date(birthday.value)
    var day=dates.getDay();
}
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