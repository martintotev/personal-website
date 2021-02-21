//Put link to site where I referenced this short JS code

var today = new Date();
var hourNow = today.getHours();
var greet;

if (hourNow > 18) {
    greet = 'Good evening';
} else if (hourNow > 12) {
    greet = 'Good afternoon';
} else if (hourNow > 5) {
    greet = 'Good morning';
} else {
    greet = 'Good *insert period of day here*';
}

$(document).ready(function () {
    $('#greet').html(greet);
});