
//JS code to change the document's logo text color

var logo = document.getElementById('logo');
var jsbutton = document.getElementById('jsbutton');
var text = document.getElementById('text');

var previousColor;
jsbutton.addEventListener('click', () => {
    // get the current color of the header
    // assign to previosColor
    // if currentColor == text.value
    //  toggle
    // else 
    //  set color to text value
    if(logo.style.color == text.value && previousColor)
        logo.style.color = previousColor;
    else {
        previousColor = logo.style.color;
        logo.style.color = text.value;
    }
});