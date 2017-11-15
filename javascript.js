
//JS code to change the document's logo text color

var logo = document.getElementById('logo');
var jsbutton = document.getElementById('jsbutton');
var text = document.getElementById('text');
jsbutton.addEventListener('click', () => {
    logo.style.color = text.value;
});