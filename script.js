// Soal 1
function add(a) {
  return a * (a - 1) * (a - 2) * (a - 3);
}

let number1 = 4;

let result = add(number1);

console.log(result);

function add2(b) {
  return b * (b - 1) * (b - 2) * (b - 3) * (b - 4) * (b - 5) * (b - 6) * (b - 7);
}

let number2 = 8;

let result2 = add2(number2);

console.log(result2);

// Soal 2
function reverseString(str) {
  var newString = '';
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

let huruf = 'abcde';
let result3 = reverseString(huruf);

console.log(result3);

// Soal 4
let A = 3;
let B = 7;

let C = A;
A = B;
B = C;

console.log(A, B);

// Soal 5
var tanya = true;
while (tanya) {
  let nilai = parseInt(prompt('Masukkan Nilai: 4,20,39 dan 104'));

  if (nilai === 4) {
    alert(4);
  } else if (nilai === 20) {
    alert(20);
  } else if (nilai === 39) {
    alert(39);
  } else if (nilai === 104) {
    parseInt(prompt('Masukkan Nilai 1-100'));
  } else {
    alert('nilai yang anda masukkan tidak terdefinisi!!');
  }
  var tanya = confirm('Ulangi?');
}
