// practice problems 

// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 
// (°C × 9/5) + 32 = °F 

function cesiuasToFahrenheti(celsiac) {
     let fahrenheti = celsiac * 9 / 5 + 32;
     return fahrenheti;
}
const cesiuas = 3;
const inputCesiuas = cesiuasToFahrenheti(cesiuas);
console.log(inputCesiuas);


// ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 
// (°C × 9/5) + 32 = °F 

function fahrenhetiToCelsuas(fahrenheti) {
    let celsuas = fahrenheti * 9 / 5 + 32; // dekhte hobe 
    return celsuas;
}
const fahrenheti = 3;
const inputFahrenheti = fahrenhetiToCelsuas(fahrenheti);
console.log(inputFahrenheti);


// ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 

function chakeGread(marks) {
    if (79 < marks) {
        console.log("A+");
    }
    else if (69 < marks) {
        console.log("A");
    }
    else if (59 < marks) {
        console.log("A-");
    }
    else if (49 < marks) {
        console.log("B");
    }
    else if (39 < marks) {
        console.log("C");
    }
    else if (32 < marks) {
        console.log("D");
    }
    else{
        console.log("F");
    }
    
}
const marks = 30;
const callFunction = chakeGread(marks);
// console.log(callFunction);


// ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 

//  sorol munafa 

let mulTaka = 100000;
let timeYear = 3;
let munafaParsent = 17;

function munafaHar(mulTaka, timeYear, munafaParsent) {
    const parsentig = munafaParsent * 0.01;
    const lav = mulTaka * parsentig;
    const somoyLav = lav * timeYear;
    let takHobe = mulTaka + somoyLav;
    return takHobe
}
const sud = munafaHar(mulTaka, timeYear, munafaParsent);
console.log(sud);

// ১ থেকে ১০০ পর্যন্ত বিযোর সংখ্যা বের করো । 

for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
    
}

// আমার কাছে যদি ৫০০০ টাকা  থাকে তাহলে আমি ঘুরতে যাবো আর না হলে জাবো না। 

let amarTaka = 60000;
let gurteKhoroch = 40000;
if (50000 <= amarTaka) {
    console.log("oh! gurte jabo");
    let tkaBakiAche = amarTaka - gurteKhoroch;
    if (tkaBakiAche > 20000) {
        console.log("bbq party hobe");
    }
    else {
        console.log("shoping korbo");
    }
}
    else{
        console.log("gurte jabo na ghumabo");
}

// ফেক্টোরিয়াল নাম্বার বের করো 

function factorialDekho(namber) {
    let fact = 1;
    for (let i = 1; i < namber; i++) {
        fact = fact * i;
    }
    return fact;
}
const number = 6;
const chakeFack = factorialDekho(number);
console.log(chakeFack);