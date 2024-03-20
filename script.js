let age = 42;
let userName = 'Olav';
let hobbies = ['Web Design', 'Gaming', 'Cooking'];
let job = {
  title: 'Web Developer',
  location: 'Sandnes',
  salary: 750000,
};

// Set adultYears without a value.
let adultYears;

// Function to deduct 18 from age using a return statement
// Setting parameter to userAge, making it a variable available only inside the function.
function calculateAdultYears(userAge) {
  let result;
  result = userAge - 18;
  return result;
}

// Call the function, storing it inside the adultYears variable
// Calculating adultYears based on the age variable (42 - 18 = 24)
adultYears = calculateAdultYears(age);
console.log(adultYears);

// Setting age to be 45
age = 45;
// Call the function, storing it inside the adultYears variable
// Calculating adultYears based on the age variable (45 - 18 = 27)
adultYears = calculateAdultYears(age);
console.log(adultYears);

// Adding a function to an object is called a method
let person = {
  name: 'Olav',
  greet() {
    console.log('Hello!');
  },
};

person.greet();
