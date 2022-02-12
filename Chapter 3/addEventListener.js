let cover = document.getElementById('cover');

cover.addEventListener('mouseover', changePic);
cover.addEventListener('mouseout', originPic);

function changePic() {
    cover.src = 'images/kakao.jpg';
}

function originPic() {
    cover.src = 'images/daum.jpg';
}