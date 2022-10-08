// 1

let personName = "Fahad Malik";
console.log("Hello " + personName + ",  would you like to learn some Java today?");



// 2

let userName = "fahad malik";
let lowerUserName = userName.toLowerCase();
let upperUserName = userName.toUpperCase()
let titleUserName = userName.split(" ").map((word) => {
        return word[0].toUpperCase() + word.slice(1);
    }).join(" ")

console.log(lowerUserName);
console.log(upperUserName);
console.log(titleUserName);



// 3

console.log("Tony Stark once said, \"Sometimes you've gotta run before you can walk.\"");



// 4

let famousPerson = "Bill Gates";
let message = famousPerson + ' once said, "The belief that the world is getting worse, that we can\'t solve extreme poverty and disease, isn\'t just mistaken."';
console.log(message);
  


// 5

let personName2 = " \tFahad Malik  \n";
console.log(personName2);    // No Stripp
console.log(personName2.trim()); // Stripped



// 6

console.log(5 + 3);
console.log(13 - 5);
console.log(4 * 2);
console.log(8 / 1);



// 7

console.log(2 + 6);
console.log(16 - 8);
console.log(2 * 4);
console.log(16 / 2);



// 8

let favoriteNumber = '20'
let message2 = "My favourite num is " + favoriteNumber

console.log(message2);



// 9

// Print Your name in console
let personName3 = "Imran Akbar"; // Person Name
console.log("Hello " + personName3 + ",  would you like to learn some Python today?"); // Concatinating My name in a variable with a string

// Simple Calculator
console.log(2 + 6); // Adding 2 and 6 is 8
console.log(16 - 8);    // Subtracting 8 from  16 is 8
console.log(2 * 4); // Multiplying 2 with 4 is 8
console.log(16 / 2);    // Diving 2 from 16 is 8



// 10

let friendNames = ["Imran", "Hassan", "Shahzaib", "Yashi"];
friendNames.map((name) => {
  console.log(name);
});



// 11

let friendNames2 = ["Imran", "Hassan", "Shahzaib", "Yashi"];
friendNames2.forEach((name) => {
   console.log('Hey ' + name + ', Wanna go for dinner.');
})



// 12

let transportMode = ['plane', 'Bike', 'Car']
let transportBrand = ["F-16", "Honda", "Mercedes"]

for (let i = 0; i < transportMode.length; i++) {
    console.log("I would love to drive " + transportBrand[i] + " " + transportMode[i] );
}



// 13

let people = ["Elon Musk", "Bill Gates", "Jeff Bezos"]

people.map(name => {
    console.log(`Hy ${name}, Will you joi me for a dinner tonight.`);
})



// 14

let people2 = ["Elon Musk", "Bill Gates", "Jeff Bezos"]

console.log("\nJeff Bezos could ot make at he dinner\n");

people2[people2.indexOf("Jeff Bezos")] = "Jack Ma";

people2.map((name) => {
  console.log(
    `Hy ${name}, Will you joi me for a dinner tonight.`
  );
});



// 15

let people3 = ["Elon Musk", "Bill Gates", "Jack Ma"];

console.log("I just found a bigger table");

people3.unshift("Mar Zukerberg")
people3.push("Larry Paige")
people3.splice(people3.length / 2, 0, "Warren Buffet")

people3.map((name) => {
    console.log(
      `Hy ${name}, Will you joi me for a dinner tonight.`
    );
  });



// 16

let peopel4 = ["Mar Zukerberg", "Elon Musk", "Warren Buffet", "Bill Gates", "Jack Ma", "Larry Paige"];

console.log("Sorry, i can only invite two peoples because of shortage of table\n");

// Not Invited
for (let i = 0; i < peopel4.length + 1; i++) {
  console.log(peopel4[0] + ", Sorry You are not invited");
  peopel4.shift();
}

// Invited
peopel4.map((name) => {
  console.log(name + " You are still invited");
});

console.log(peopel4.splice(2));



// 17

let places = ["Karachi", "Multan", "Sargodha", "Mardan", "Islamabad"]
let places2 = [...places] // Copy Orignial Array

// Orignial Order
console.log(places);
// Sorted Order For Copy Array
console.log(places2.sort());
// Original Array
console.log(places);
// Reverse Order for Copy Array
console.log(places2.reverse());
// Orginal Array
console.log(places);
// Reverse Order for Original Array
console.log(places.reverse());
// Reverse Order for Original Array
console.log(places.reverse());
// Sorted Order for Original Array
console.log(places.sort());
// reverse Order for Original Array
console.log(places.reverse());



// 18

let peopel5 = ["Mar Zukerberg", "Elon Musk", "Warren Buffet", "Bill Gates", "Jack Ma", "Larry Paige"];
console.log("I am inviting " + peopel5.length + " peoples to dinner.");



// 19

let cars = []

const addCars = (...list) => {
    cars.push(...list)
}

addCars("suzuki", "bmw", "toyota")

console.log(cars);


// 20

let carData = {
  brand: 'Honda',
  color: "White",
  year: 2020,
  name: "Civic",
};

console.log(carData);



// 21

let pakProvince = ["Capital", "KPK", "Punjab", "Sindh", "Kashmir", "Balochistan"];

console.log(pakProvince[1]);
console.log(pakProvince[4]);
console.log(pakProvince[6]); // Undefined



// 22

let name = "fahad"
let firstNum = 1
let secondNum = 5

console.log("If name == 'fahad'? I Predict True.");
console.log(name == "fahad");
console.log("If firstNum == secondNum? I Predict False.");
console.log(firstNum == secondNum);
console.log("If firstNum > secondNum? I Predict False.");
console.log(firstNum > secondNum);
console.log("If firstNum < secondNum? I Predict True.");
console.log(firstNum < secondNum);
console.log("If firstNum != secondNum? I Predict True.");
console.log(firstNum != secondNum);
console.log("If name == 'malik'? I Predict False.");
console.log(name == "malik");
console.log("If name == secondNum? I Predict False.");
console.log(name == secondNum);
console.log("If firstNum >= secondNum? I Predict False.");
console.log(firstNum >= secondNum);
console.log("If firstNum <= secondNum? I Predict True.");
console.log(firstNum <= secondNum);
console.log("If firstNum == 10? I Predict True.");
console.log(firstNum == 10);



// 23

console.log('If "fahad" == "fahad"? I predict True');
console.log("fahad" == "fahad");
console.log('If "fahad" == "malik"? I predict false');
console.log("fahad" == "malik");
console.log('If 8 == 17? I predict false');
console.log(8 == 17)
console.log('If 67 == 67? I predict True');
console.log(67 == 67);
console.log('If 20 > 99? I predict false');
console.log(20 > 99);
console.log('If 27 < 28? I predict True');
console.log(27 < 28);
console.log('If 7 >= 77? I predict false');
console.log(7 >= 77);
console.log('If 100 <= 760? I predict True');
console.log(100 <= 760);
console.log('If 100 <= 100? I predict True');
console.log(100 <= 100);
console.log('If "yashi" == "yashi" && 66 > 33? I predict True');
console.log("yashi" == "yashi" && 66 > 33);
console.log('If "yashi" == "yashi" && 66 < 33? I predict False');
console.log("yashi" == "yashi" && 66 < 33);
console.log('If "yashi" == "Hurain" || 66 > 33? I predict True');
console.log("yashi" == "Hurain" || 66 > 33);
console.log('If "yashi" == "Hurain" || 66 < 33? I predict False');
console.log("yashi" == "Hurain" || 66 < 33);
console.log('If [100, 200, 300].includes(200)? I predict True');
console.log([100, 200, 300].includes(200));
console.log('If [100, 200, 300].includes(65)? I predict False');
console.log([100, 200, 300].includes(65));



// 24

let alienColor = "green";

if (alienColor == "green") {
  console.log("You just earned 5 points");
}
if (alienColor != "green") {
  console.log("");
}



// 25

let alienColor2 = "green";

if (alienColor2 == "green") {
  console.log("You earned 5 points");
} else {
  console.log("You earned 10 points");
}



// 26

let alienColor3 = "green";

if (alienColor3 == "green") {
  console.log("You earned 5 points");
} else if (alienColor3 == "yellow") {
  console.log("You earned 10 points");
} else if (alienColor3 == "red") {
    console.log("You earned 15 points");
}


// Second
alienColor3 = "red";

if (alienColor3 == "green") {
  console.log("You earned 5 points");
} else if (alienColor3 == "yellow") {
  console.log("You earned 10 points");
} else if (alienColor3 == "red") {
    console.log("You earned 15 points");
}


// Third
alienColor3 = "yellow";

if (alienColor3 == "green") {
  console.log("You earned 5 points");
} else if (alienColor3 == "yellow") {
  console.log("You earned 10 points");
} else if (alienColor3 == "red") {
    console.log("You earned 15 points");
}



// 27

let age = 25;

if (age < 2) {
  console.log("The person is a baby");
} else if (age >= 2 && age < 4) {
  console.log("The person is a Toddler");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager");
} else if (age >= 20 && age < 65) {
  console.log("The person is a adult");
} else if (age >= 65) {
  console.log("The person is a elder");
}



// 28

let favoriteFruits = ["Apple", "Orange", "Grapes"];

if (favoriteFruits.includes("Apple")) {
  console.log("I really like Apple");
}
if (favoriteFruits.includes("Oranges")) {
  console.log("I really like Oranges");
}
if (favoriteFruits.includes("Grapes")) {
  console.log("I really like Grapes");
}
if (favoriteFruits.includes("Banana")) {
  console.log("I really like Bananas");
}
if (favoriteFruits.includes("mango")) {
  console.log("I really like mango");
}



// 29

let usernames = ["fire", "water", "dragon", "horse", "admin"];

usernames.map((name) => {
  if (name == "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${name}, thank you for logging in again`);
  }
});



// 30

let username2 = [];

if (username2.length == 0) {
  console.log("We need to find some users");
} else {
  username2.map((name) => {
    if (name == "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${name}, thank you for logging in again`);
    }
  });
}



// 31

let current = ["admin", "leader", "user", "customer", "online"];
let _new = ["Leader", "soldier", "king", "online", "servant"];

_new.map((user) => {
  if (current.includes(user.toLowerCase())) {
    console.log("Enter a new username");
  } else {
    console.log("username is available");
  }
});



// 32

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

nums.forEach((num) => {
  if (num == 1) {
    console.log(num + "st");
  } else if (num == 2) {
    console.log(num + "nd");
  } else if (num == 3) {
    console.log(num + "rd");
  } else {
    console.log(num + "th");
  }
});



// 33

let pizzaName = ["BBQ", "Fried", "Italian"]

for (let i = 0; i < pizzaName.length; i++) {
    console.log("I like " + pizzaName[0] + " pizza");
}

console.log("I really like " + pizzaName[0] + " pizza");
console.log("I mostly like " + pizzaName[1] + " pizza");
console.log("I sometimes like " + pizzaName[2] + " pizza");



// 34

let animals = ["cat", "dog", "wolf"];

for (const animal of animals) {
  console.log("A " + animal + " would make a great pet");
}

console.log("Cat would make even great pet");
console.log("Dog would make even great pet");
console.log("Wolf would make even great pet");



// 35

const makeShirt = (size, message) => {
  console.log("The shirt size is " + size + " and the message to print on is " + message);
}

makeShirt('large', "Mi Amore")



// 36

const makeShirt2 = (size = "large", message) => {
  if (size == "large" || size == "medium") {
    console.log("The shirt size is " + size + " and the message to print on is I love Javascript");
  } else {
    console.log("The shirt size is " + size + " and the message to print on is " + message);
  }
};

makeShirt2("large", "Mi Amore");



// 37

function describeCity(name, countryName = "Pakistan") {
  console.log(name + " is in " + countryName);
}

describeCity("multan");
describeCity("mardan");
describeCity("dubai");



// 38

function cityCountry(cityName, countryName) {
  console.log(`"${cityName}, ${countryName}"`);
}

cityCountry("Dubai", "UAE");



// 39

const makeAlbum = (artistName, albumTitle, numOfTracks = 0) => {
  return {
      'Artist Name': artistName,
      'Album Title': albumTitle,
      'Number Of Tracks': numOfTracks
  }
}

console.log(makeAlbum('Pink Floyd', 'The dark Side Of the Moon'));
console.log(makeAlbum('Harry Styles', 'Fine Line'));
console.log(makeAlbum('The Beattles', 'Abby Road'));
console.log(makeAlbum('Adele', '21', 11));



// 40

let magicians = ["Jason Ralph", "Olivia Rudley", "Stella"];

const showMagicians = (array) => {
  array.map((name) => {
    console.log(name);
  });
};

showMagicians(magicians);



// 41

let magicians2 = ["Jason Ralph", "Olivia Rudley", "Stella"];

const makeGreat = (array) => {
    array.map((name) => {
    array[array.indexOf(name)] = "Great " + name;
  });
  console.log(array);
};

makeGreat(magicians2);



// 42

let magicians3 = ["Jason Ralph", "Olivia Rudley", "Stella"];;
let magiciansCopy = [...magicians3];

const showMagicians2 = (array) => {
  array.map((name) => {
    console.log(name);
  });
};

const makeGreat2 = (array) => {
  array.map((name) => {
    array[array.indexOf(name)] = "Great " + name;
  });
  return array;
};

let newArray = makeGreat2(magiciansCopy);
showMagicians2(magicians3);
showMagicians2(newArray);



// 43

function itemsForSandwich(array) {
  console.log("The person is demanding for the following items on the sandwich: ");
  array.map((item, index) => {
    console.log(`${index}) ${item}`);
  });
}

itemsForSandwich(["Ketchup", "Mayonese"]);
itemsForSandwich(["Spinach", "Carrot", "Tomato"]);
itemsForSandwich(["Ketchup", "Mayonese", "Kabab", "Tomato"]);



// 44

const carInfo = (manufacturer, model, ...information) => {
  let lastObject = Object.assign(information[0], information[1]);
  return {
    Manufacturer: manufacturer,
    "Model Number": model,
    ...lastObject,
  };
};

console.log(
  carInfo("BMW", "Model X", { Color: "Red" }, { Rims: "Steel" })
);