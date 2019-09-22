function getFemaleAkanName() {
    var bday = new Date();
    var femalebday = new Array(7);
    weekday[0] = "Akosua";
    weekday[1] = "Adwoa";
    weekday[2] = "Abenaa";
    weekday[3] = "Akua";
    weekday[4] = "Yaa";
    weekday[5] = "Afua";
    weekday[6] = "Ama";

    var femaleakan = femalebday[bday.getDay()]
    alert(femaleakan);
}
function getMaleAkanName (){
    var malebday = new Array(7);
    weekday[0] = "Kwasi";
    weekday[1] = "Kwadwo";
    weekday[2] = "Kwabena";
    weekday[3] = "Kwaku";
    weekday[4] = "Yaw";
    weekday[5] = "Kofi";
    weekday[6] = "Kwame";

    var maleakan = malebday[bday.getDay()]
    alert(maleakan)
}
