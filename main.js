// !צור משתנה JSON של אדם: שם, גיל, עיר מגורים
let person = `{
    "name":"moshe",
    "age": 22,
    "city": "jerusalem"
}`;

console.log(person);

// !צור משתנה JSON של רכב: דגם, שנה, מחיר,תמונות(לינקים)
let car = `{
    "model":"mazda3",
    "year":2020,
    "price": 19990,
    "pics":["https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629__340.png",
    "https://cdn.pixabay.com/photo/2012/04/12/23/48/car-30990__340.png"]
}`;

console.log(car);
// !המר את המשתנה משאלה 1 לאובייקט והדפס לקונסול
console.log(JSON.parse(car));
// !המר את המשתנה משאלה 2 לאובייקט והדפס לקונסול
console.log(JSON.parse(person));

// !צור משתנה JSON של ספר:שם, שנה, מחבר שהוא אובייקט(שם, שנת לידה)
let book = `{
    "name":"a tale of love and darkness",
    "year":2004,
    "author":{"name":"amos oz" , "birthYear":1939}
}`;
// !המר את הספר משאלה 5 לאובייקט והדפס לקונסול
console.log(JSON.parse(book));

// !נתון אובייקט של כתבה: כותרת,  מחבר ותאריך
// !המר את הכתבה לפורמט JSON

let article = {
  title: "covid19",
  author: "roni gamzu",
  date: "19/01/21",
};

let myArticle = JSON.stringify(article);
console.log(myArticle);

// !נתון אובייקט של מוצר: שם,  מחיר, הנחה באחוזים
// !המר את המוצר לפורמט JSON

let product = {
  name: "milk",
  price: 10,
  discount: 5,
};

let myProduct = JSON.stringify(product);
console.log(myProduct);

// !צור משתנה JSON בשם store:
// !בתוך המשתנה יש:
// ! מערך של מוצרים: שם, מחיר,תיאור ותמונה
// !מערך של קטגוריות

const store = `{
    "products":[
        {"name":"shirt", "price":"100", "description":"black long sleeves top", "pic":"https://cdn.pixabay.com/photo/2014/04/03/10/55/t-shirt-311732_960_720.png"},
        {"name":"jacket", "price":"400", "description":"brown cotton sporting jacket", "pic":"https://cdn.pixabay.com/photo/2015/03/26/09/54/person-690547__340.jpg"},
        {"name":"pants", "price":"250", "description":"jeans", "pic":"https://cdn.pixabay.com/photo/2017/03/24/19/48/jeans-2172032__340.jpg"}
    ],
    "categories": ["shirts", "jackets", "jeans"]
}`;

let myStore = JSON.parse(store);
console.log(myStore);

let i=0
const theStore = document.getElementById("theStore")
for (let i = 0; i<myStore.products.length; i++) {
    theStore.innerHTML += `<p style = "text-align: center">
    ${myStore.products[i].name} </p>`
}

myStore.products.forEach(element => {
    theStore.innerHTML += `<p style = "text-align: center">
    ${myStore.products[i++].name} </p>`
    // ${element.name} </p>`

   
});

for (const name in store.products) {    
     {
        // const element = object[name];
        theStore.innerHTML += `<p style = "text-align: center">
        ${myStore.products[i].name} </p>`
        
    }
}

// !1
// !צור משתני JSON של הודעת צור קשר: שם, הודעה,אימייל
// !המר את ההודעה לאובייקט

let message = `{
    "name":"moshe",
    "alert":"please contact us",
    "email":"abcd@gmail.com"
}`;

console.log(JSON.parse(message));

// !2
// !צור משתנה של JSON המכיל: 
// !מערך של רכבים: דגם, מחיר, שנתון 
// !מערך של ספינות: שם, שנתון, מקום עגינה ותמונה
// !הצג את כל הספינות על המסך

let transportation = `{
    "cars":[
        {"name":"ford focus", "price":10000, "year":2020},
        {"name":"subaru forester", "price":24000, "year":2015},
        {"name":"pants", "price":25000, "year":2017}
    ],
    "yachts":[
        {"name":"black pearl", "year":2021, "port":"haifa", "img":"https://cdn.pixabay.com/photo/2015/03/05/01/46/sailing-ship-659758__340.jpg"},
        {"name":"flying dutcman", "year":2017, "port":"ashdod", "img":"https://cdn.pixabay.com/photo/2015/03/16/10/59/sunset-675847__480.jpg"},
        {"name":"endavour", "year":2021, "port":"eilat", "img":"https://cdn.pixabay.com/photo/2021/09/16/21/27/container-ship-6631117__340.jpg"}
    ]
}`

const ships = document.getElementById("ships")
let veichles = JSON.parse(transportation);
console.log(veichles)

veichles.yachts.forEach(element => {
    ships.innerHTML += `<p style = "text-align: center">
    ${element.name}<br>
    ${element.year}<br>
    ${element.port}<br>
    <img style = "width:450px; height:450px" src=${element.img}>
    </p>`  
});

// !3
// !צור טופס יצירת קשר באתר: שם, מייל, הודעה
// !צור אובייקט על פי השדות האלו
// !המר את האובייקט שיצרת לפורמט JSON

function getObject(json) {
    JSON.parse(json)
    JSON.stringify(json)
}