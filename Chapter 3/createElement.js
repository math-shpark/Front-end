let newImg = document.createElement('img');
let srcNode = document.createAttribute('src');
let altNode = document.createAttribute('alt');

srcNode.value = 'images/kakao.png';
altNode.value = '카카오 이미지';

newImg.setAttribute(srcNode);
newImg.setAttribute(altNode);

document.getElementById('image').appendChild(newImg);