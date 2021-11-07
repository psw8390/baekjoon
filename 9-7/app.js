var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
 
var [x, y, w, h] = input.map(el => parseInt(el));
 
 
//w, h 는 x, y보다 크기 떄문에 항상 양수
const xDiff = w-x
const yDiff = h-y
 
// 네개의 변수 중 최소값이 문제에서 하는 최소 거리이다.
const arr = [xDiff, yDiff, x, y]
// js의 기본 sort는 ascii 문자를 기준으로 정렬하기 때문에 반드시 비교함수를 넣어줘야한다.
arr.sort((a, b) => {
  return a - b
});
console.log(arr[0])
