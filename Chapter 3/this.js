var person = {
    name: 'hong',
    eat: function (food) {
        alert(this.name + '이' + food + '을/를 먹는다');
    }
};

person.eat('고기');