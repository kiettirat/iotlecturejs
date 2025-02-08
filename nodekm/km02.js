//Variable ตัวแปร

var a =10; //เปลี่ยนค่าได้
let b =20;//เปลี่ยนค่าได้ เป็น Local ใช้ได้เฉพาะใน {} หรือ scope การทำงานหนึ่งๆ เท่านั้น
const c =30;//เปลี่ยนค่าไม่ได้ แล้วต้องมีค่าด้วย

a = 11;
b = 22;
//c = 33;

{
    var d = 40;
    let e = 50;
    const f = 60;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
}
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);