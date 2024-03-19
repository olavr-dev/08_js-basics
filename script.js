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

// Function to deduct 18 from age to find number of adult years.
function calculateAdultYears() {
  adultYears = age - 18;
}

// Call the function
calculateAdultYears();
console.log(adultYears);

// Set age to a new value
age = 45;
// Call the function
calculateAdultYears();
console.log(adultYears);
