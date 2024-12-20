// 1.Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin va ularning yig’indisini     qaytarib bersin. 
function sum(x, y) {
  return x + y;
}
console.log(sum(5, 7));


// 2.Minutlarni butun son sifatida qabul qilib, uni sekundlarga o’girib beradigan funksiya yasang.
function toSekunds(minutes) {
  return minutes * 60;
}
console.log(toSekunds(6));


// 3.Funksiya butun son qabul qiladi. Funksiya ushbu butun sondan keyingi sonni qaytarsin.
function nextInteger(int) {
  return int + 1;
}
console.log(nextInteger(8));


// 4.Funskiya uchburchakning asosi va balandligini qabul qiladi. Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2
function uchburchakYuzi(asos, balandlik) {
  let S = (asos * balandlik) / 2;
  return S;
}
console.log(uchburchakYuzi(5, 6));


// 5.Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb oling.
function ageToDays(age) {
    let totalDays = age * 365
    return totalDays

}
console.log(ageToDays(18));


// 6.Quyidagi namunalarga muvofiq ravishda funksiyani tana qismini yozing.
function kub(num){
    return Math.pow(num, 3)
}
console.log(kub(5));


// 7.Massivni ichidan birinchi elementini qaytaradigan funksiya yasang.
let fruits = ["Mango", "Kiwi", "Banana", "Orange"]
function firstElement(arr) {
    return arr[0]
}
console.log(firstElement(fruits));


// 8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.
function power(x,y) {
    return x * y
}
console.log(power(19, 10));


// 9.Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan funksiya yasang.
function hourToSekunds(hour) {
    return hour * 60 * 60
}
console.log(hourToSekunds(10));


// 10.Uchburchakning uchinchi tomonining eng uzun qiymatini qaytaradigan funksiya yasang. 
// Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1
function uchinchiTomon(tomon1, tomon2) {
    return (tomon1 + tomon2) - 1
}
console.log(uchinchiTomon(8, 10));


// 11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan funksiya yasang.
function qoldiq(son1, son2) {
    if(son2 === 0){
        return "2-son 0ga teng bo'lmasin"
    }
    return son1 % son2
}
console.log(qoldiq(-9, 45));



// 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab qaytaradigan funksiya yasang. Formula S = bo’yi * eni 
function turtburchakYuzi(boyi, eni) {
    let s = boyi * eni
    return s
}
console.log(turtburchakYuzi(6, 7)); // 42 chiqdi



// 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi. ushbu funksiya “Something” stringiga " " bo’sh joy va “a” stringini birlashtirib qaytarsin.
let a = "something"
function stringQoshish(a) {
    return `${a} is in Moonalog`
}
console.log(stringQoshish(a));


// 14.Quyidagi namunalarga qaragan holatda funksiya yasang.
function kvadrat(k){
    return Math.pow(k, 2)
}
console.log(kvadrat(9));



// 15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.
function noldan(raqam) {
    if(raqam <= 0){
        return true
    }else{
        return false
    }
}
console.log(noldan(-9));



// 16.Funksiya ko’p  burchakli shaklning burchaklar sonini qabul qiladi. Natijada funksiya ushbu shaklning ichki burchaklar yig’indisini qaytarsin. Formula (n - 2) x 180
function ichkiBurchaklar(n) {
    return (n - 2) * 180
}
console.log(ichkiBurchaklar(4));



// 17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar sonini va 2-argument sifatida uch ochkolik gollar sonini qabul qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.
function ochkolar(x,y) {
    return (x * 2) + (y * 3)
}
console.log(ochkolar(7, 5));



// 18.Quyidagi namunalarni kuzatgan holda unga muvofiq funksiya yasang.
let add = "Edabit"
function edabit(s){
    return "Mubashshir" + s
}
console.log(edabit(add));


// 19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya yasang.
function ikkitaSon(x,y) {
    if( x + y < 100){
        return true
    }else{
        return false
    }
}
console.log(ikkitaSon(22, 15));



// 20.Quyidagi namunalarni kuzatgan holda unga muvofiq keladigan funksiya yasang.
function printArray(n){
    let result = []
    for(i = 1; i <= n; i++){
        result.push(i)
    }
    return result
}
console.log(printArray(6));



// 21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi argument sifatida tovuqlar sonini, ikkinchi argument sifatida qo’ylarni va uchinchi argument sifatida sigirlarning sonini qabul qiladi.
function oyoqlar(tovuq, qoy, sigir) {
    return (tovuq * 2) + (qoy * 4) + (sigir * 4)
}
console.log(oyoqlar(2, 3, 5));



// 22.Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!
function answer(m, n){
    if( m && n){
        return true
    }else{
        return false
    }
}
console.log(answer(false, true));



// 23.Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala qiymatning ma’lumot turi bir xil bo’lsin.
function tengMi(x, y) {
    if(x === y){
        return true
    }else{
        return false
    }
}
console.log(tengMi(4, "4"));



// 24.Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta mag’lubiyat = 0 ochko hisoblanadi. 
function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
    let overall = (yutishlar * 3) + duranglar + (maglubiyatlar * 0)
    return overall
}
console.log(futbolOchko(3, 4, 2));



// 25.Funskiya soatlar va minutlarni argument sifatida qabul qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib ularning yig’indisini qaytarsin.
function sekundlar(soat, minut) {
    hour = soat * 60 * 60;
    min = minut * 60;
    return hour + min
}
console.log(sekundlar(1, 3));



// 26.Quyidagi namunalarni kuzatgan holda funksiya yasang.
function isPrime(num) {
    if (num < 2) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true
}
console.log(isPrime(9));



// 27.Funskiay 2ta istalgan turdagi qiymatlar qabul qiladi. Agar ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi jihatidan teng bo’lsa rost, aks holda funkisya yolg’on qiymat qaytarsin.
function tengMi(x, y) {
    if(x === y){
        return true
    }else{
        return false
    }
}
console.log(tengMi(0, true));


// 28.Funksiya boolean qiymat qabul qiladi. Ushbu funksiya boolean qiymatni stringga o’girib qaytarib bersin.
function booleanToString(bool) {
    return bool.toString()
}
console.log(booleanToString(true));



// 29.Arrow funksiyasini yarating ushbu funksiya shunchaki berilgan qiymatni qaytarsin.
const arrowFunc = (value) => value;
console.log(arrowFunc(9));


// 30.Framelar sonini hisoblaydigan funksiya yarating. Frame bu 1 sekundda necha marta ko’rinishlar soni aylanishi. Funksiya minutlar va 1 sekundda nechta framelar soni aylanishini argument sifatida qabul qiladi. Funksiya jami framelar sonini qaytarsin.
function frameSoni(minut, frame) {
    return (minut * 60) * frame
}
console.log(frameSoni(10, 25));



// 31.Oddiy matematik amallar ketma-ketligi string ko’rinishida funksiyaga argument sifatida beriladi. Ushbu funksiya matematik ifodani bajarib natijani qaytarsin.
let problem = "23 + 4"
function calc(str) {
    return eval(str)  
}
console.log(calc(problem));



// 32.Shunday funksiya yasangki, unda 2ta butun son argument qilib beriladi. Agar ushbu sonlardan birontasi 10ga teng bo’lsa yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat qaytaradi. Aks hold yolg’on.
function teng10(p, q) {
    if(p == 10 || q == 10 || p + q == 10){
        return true
    }else{
        return false
    }
}
console.log(teng10(9, 9));



// 33.Mashina kilometriga 10litr benzin ichadi. Mashina doim yo’lga chiqishdan oldin kamida 100litr benzin bilan chiqadi. Agar masofa funksiyaga argument sifatida berilsa, ushbu masofaga chiqish uchun Mashina necha litr benzin bilan chiqishi keraglini funksiya qaytarib bersin.
function litrMasofa(km) {
    return km * 10
}
console.log(litrMasofa(23.5));



// 34.Quyidagi namunaga nazar tashlagan holda funksiya yasang.
function lessMore(a, b){
    if(a < b) {
        return b
    }else{
        return a
    }
}
console.log(lessMore(0, 7));




// 35.Funksiya 2ta argument berilsa, funksiya anashu 2ta argumentdan iborat massiv qaytarsin.
function arr(x, y) {
    return [x, y]
}
console.log(arr(1, 2));



// 36.Funksiyaga 2ta argument sifatida string ko’rinishidagi ma’lumotlar beriladi. Agar ushbu ikkala stringdagi belgilar soni bir-birinikiga teng bo’lsa funksiya rost qiymat qaytarsin, aks hold yolg’on.
function tengStrings(str1, str2) {
    if(str1.length == str2.length){
        return true
    }else{
        return false
    }
}
console.log(tengStrings("AB", "mm"));



// 37.Shunday funksiya yasangki, unga string argument qilib beriladi, agar ushbu string bo’sh bo’lsa funksiya true qaytaradi, aks holda false.
function boshStr(str) {
    if(str.length == 0){
        return true
    }else{
        return false
    }
}
console.log(boshStr(""));



// 38.Shunday funksiya yasang.Unda butun son argument qilib beriladi. Agar ushbu butun son 5ga bo’linsa, funksiya true qaytarsin, aks holda false.
function bolinsin5(son) {
    if(son % 5 === 0){
        return true
    }else{
        return false
    }
}
console.log(bolinsin5(24));



// 39.Shunday funksiya yasang.Unda butun son argument qilib beriladi. Agar ushbu butun son 100ga bo’linsa, funksiya true qaytarsin, aks holda false.
function bolinsin100(son) {
    if(son % 100 === 0){
        return true
    }else{
        return false
    }
}
console.log(bolinsin100(1010));




// ***
// 40.Shunday funksiya yasangki, ushbu funksiya stringni ichida nechta belgi borligini aytsin. Bunda length propertisidan foydalanmang va rekursiv funksiya ishlating.
function stringLength(str, count = 0) {
    if (str === "") return count;
    return stringLength(str.slice(1), count + 1);
}
console.log(stringLength("hello world!"));

















































