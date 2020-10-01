// Localise greeting based on the browswer's language

var userLang = navigator.language || navigator.userLanguage; 
console.log('The language code is: ' + userLang);
console.log(typeof userLang);

if ((userLang == 'en-GB') || (userLang == 'en-CA') || (userLang == 'en-US') || (userLang == 'en-ZA') || (userLang == 'en-IE')) {
    langLocal = 'hello there!';
} else if ((userLang == 'en-AU') || (userLang == 'en-NZ')) {
    langLocal = 'gday mate!';
} else if (userLang == 'ko') {
    langLocal = '안녕하세요?';
} else if (userLang == 'bg') {
    langLocal = 'здравей!';
} else {
    langLocal = 'hi!';
}

console.log(langLocal);

$(document).ready(function () {
    $('#langLocal').html(langLocal);
});