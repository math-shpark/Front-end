var car = {
    size: 'Big',
    company: 'Hyundai',
    color: 'Black',
}

for (var i in car) {
    alert(i + ':' + car[i]); // 속성이 하나씩 출력됨
}