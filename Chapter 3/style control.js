var output = '';

for (var i = 0; i < 256; i++) {
    output += '<div></div>';
}

document.body.innerHTML = output;

var divs = document.querySelectorAll('div');

for (var i = 0; i < divs.length; i++) {
    var div = divs[i];

    div.style.height = '2px';
    div.style.background = 'rgb(' + i + ',' + i + ',' + i + ')';
}