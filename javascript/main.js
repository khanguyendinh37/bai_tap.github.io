
var fullName='Nguyễn Đình Kha';
var age ='xác nhận tuổi';//toán tử gán.
alert(fullName);//Hàm thông báo 
console.log(fullName);//
// confirm(age);//Hàm xác nhận
prompt(age)//hàm thêm vào của số input để xác nhận 
setTimeout(function() {//hàm đặt thời gian chờ đên lệnh
    alert('thông báo !')
},2000);
// setInterval(function() {//hàm đặt thời gian chờ đên lệnh và liên
//     alert('thông báo liên tục !');
 
// },2000);
// setInterval(function() {//hàm đặt thời gian chờ đên lệnh và liên
    
//     console.log('Thông báo' + Math.random());
// },2000);

// var a=8;
// var b=6;
// prompt('moi nhập tuổi để xác nhận '+ Math.age)
// if(age>=18){
//     alert('bạn đã đủ tuổi');
// }else{
//     alert('bạn chưa đủ tuổi');
// }

/*
__________________________________
+ --> Toán tử cộng
- --> toán tử trừ
* --> toán tử nhân
** --> toán tử lũy thừa
/ --> toán tử chia
% --> toán tử chia lấy số dư
++ --> tăng thêm 1 giá trị số
-- --> giảm một giá trị số
__________________________________
*/
// var c = a + b;
// var d = a - b;
// var e = a ** b;
// console.log(c);
// console.log(d);
// console.log(e);

/*
__________________________________
toán tử gán 
toán tử    ví dụ      tương  đương 
=          x = y       x = y
+=         x += y      x = x + y
-=         x -= y      x = x - y
*=         x *= y      x = x * y
/=         x /= y      x = x / y
**=        x **= y     X = x ** y
___________________________________
*/ 
function bat(){
    document.getElementById('myImage').src='pic_bulbon.gif';
}
function tat(){
    document.getElementById('myImage').src='pic_bulboff.gif';
}

function myFunction() {
   
    document.getElementById("demo").innerHTML = "Việc hiển thị các phần tử HTML ẩn cũng có thể được thực hiện bằng cách thay đổi displaykiểu.";
}
function thoiGian() {
    var date= new Date();
    var gio=date.getHours();
    var phut=date.getMinutes();
    var giay=date.getSeconds();
   if(gio<10){
    gio= "0" + gio;
   }
   if(phut<10){
    phut= "0" + phut;
   }
   if(giay<10){
    giay= "0" + giay;
   }
    document.getElementById("time").innerHTML = gio +': ' + phut +': '+giay
    setTimeout("thoiGian()",1000);
}
thoigian();

var a = '1';
var b = 2;

var c = typeof a;
var d = typeof b;
var e = typeof d;

console.log(c, d, e) // Output: ?