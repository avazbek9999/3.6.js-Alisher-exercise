//mashq js 2 dars

// var a = prompt('birinchi saonni kiriting');
// var b = prompt('ikkinchi sonni kiriting');
// var result = prompt(`${a}+${b}=`);

// var x = a - 0;
// var y = b - 0;
// // var z = result - 0;

// if (x + y === result) {
//     console.log('malades')
// } else {
//     console.log('uzur')


// var index = 3;

// if (index === 3) {
//     console.log('ha bu raqam ' + index);
// } else if (index === 3) {
//     console.log('ha bu raq ' + index);
// }


var where = prompt('Qayerga sayohatga chiqishni hohlaysiz?');

alert(`${where}ga ketadigan barcha harajatlar:
   -Borish-kelish samalyot bileti-$500
   -Mehmonxona to'lovi(to'liq safar davomiyligi uchun)-120$
   -Muzey va ko'ngil ochar joylar uchun-120 yevro
`);

alert(`Hozirgi kundagi dollor va yevro kurslari:
   $1 = 9433.34 so’m
   1 yevro = 10354.03 so’m
`);


var USD = 9433.34;
var YEVRO = 10354.03;

var tisket = Math.round(500 * USD);
var hotel = Math.round(120 * USD);
var Muzey = Math.round(120 * YEVRO);
var allExpense = tisket + hotel + Muzey;
//  allExpance = 7.091.155

var money = prompt('O\'zizda qancha pul borligini so\'mda kiriting');

if (money >= allExpense) {
    alert('Oq yo\'l Alisher');
} else {
    alert('keyingi safar Alisher ');
}
