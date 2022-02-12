// 예시 1
var image = document.getElementById('image');

image.src = 'http://placehold.it/300x200';
image.width = 300;
image.height = 200;

// 예시 2
document.body.setAttribute('data-custom', 'value');

var dataCustom = document.body.getAttribute('data-custom');