let numbers = [1, 2, 3, 4, 5];

// 인수가 1개
newNumbers = numbers.splice(2); // 괄호 안에 적힌 인덱스부터 끝까지 삭제

// 인수가 2개
newNumbers = numbers.splice(2, 1); // 시작 인덱스(2)부터 정해진 개수(1)의 요소 삭제

// 인수가 3개
newNumbers = numbers.splice(2, 1, 'js'); // 시작 인덱스(2)부터 정해진 개수(1)의 요소를 삭제한 후 삭제 시작 인덱스에 주어진 데이터(js)를 추가