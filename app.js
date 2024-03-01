// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

let driverName = 'Kalvian-1';
console.log("The driver's name is " + driverName);
let navigatorName = 'Kalvian-2';
console.log("The navigator's name is " + navigatorName);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (driverName.length > navigatorName.length) {
  console.log(
    'The driver has the longest name, it has ' +
      driverName.length +
      ' characters.'
  );
} else if (driverName.length < navigatorName.length) {
  console.log(
    'It seems that the navigator has the longest name, it has ' +
      navigatorName.length +
      ' characters.'
  );
} else {
  console.log(
    'Wow, you both have equally long names, ' +
      driverName.length +
      ' characters!'
  );
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5.

let vowels = 'aeiouAEIOU';
let driverVowels = '';
let navigatorVowels = '';

for (let i = 0; i < driverName.length; i++) {
  if (vowels.includes(driverName[i])) {
    driverVowels += driverName[i] + ' ' + i + ' ';
  }
}
if (driverVowels === '') {
  console.log('No vowels in ' + driverName);
} else {
  console.log(driverName + ' ' + driverVowels);
}

for (let i = 0; i < navigatorName.length; i++) {
  if (vowels.includes(navigatorName[i])) {
    navigatorVowels += navigatorName[i] + ' ' + i + ' ';
  }
}
if (navigatorVowels === '') {
  console.log('No vowels in ' + navigatorName);
} else {
  console.log(navigatorName + ' ' + navigatorVowels);
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

let driverUpperCase = 0;
let driverLowerCase = 0;
let navigatorUpperCase = 0;
let navigatorLowerCase = 0;

for (let i = 0; i < driverName.length; i++) {
  if (driverName[i] === driverName[i].toUpperCase()) {
    driverUpperCase++;
  } else {
    driverLowerCase++;
  }
}
console.log(
  'Driver: Upper Case - ' +
    driverUpperCase +
    ', Lower Case - ' +
    driverLowerCase
);

for (let i = 0; i < navigatorName.length; i++) {
  if (navigatorName[i] === navigatorName[i].toUpperCase()) {
    navigatorUpperCase++;
  } else {
    navigatorLowerCase++;
  }
}
console.log(
  'Navigator: Upper Case - ' +
    navigatorUpperCase +
    ', Lower Case - ' +
    navigatorLowerCase
);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"

let driverCharacters = '';
for (let i = 0; i < driverName.length; i++) {
  driverCharacters += driverName[i].toUpperCase() + ' ';
}
console.log(driverCharacters.trim());

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"

let navigatorCharacters = '';
for (let i = navigatorName.length - 1; i >= 0; i--) {
  navigatorCharacters += navigatorName[i];
}
console.log(navigatorCharacters);

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
let mergedNames = driverName + ' ' + navigatorName;
console.log(mergedNames);
let reversedNames = navigatorName + ' ' + driverName;
console.log(reversedNames);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (driverName.localeCompare(navigatorName) < 0) {
  console.log("The driver's name goes first.");
} else if (driverName.localeCompare(navigatorName) > 0) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus est vel dolor ullamcorper feugiat. 
Nulla facilisi. Suspendisse id leo a libero tempor volutpat. Proin ullamcorper auctor mi, ac gravida mauris facilisis at. 
Praesent sodales ex id interdum laoreet. Sed id magna ex. Donec nec velit id justo fermentum consectetur. 
Phasellus ut tellus a eros vestibulum auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
Donec fermentum nisl non justo consequat, eget malesuada nisl cursus. Nulla facilisi. Mauris sit amet interdum nisl. 
Quisque accumsan vitae nisi vel tincidunt. Vestibulum ullamcorper orci non varius sollicitudin.`;

// Count the number of words in the string
let wordCount = 1; // Start with 1 as the first word is not preceded by a space
let etCount = 0;

for (let i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum[i] === ' ') {
    wordCount++;
  } else if (loremIpsum.slice(i - 1, i + 1) === 'et') {
    etCount++;
  }
}

console.log('Number of words in the string: ' + wordCount);
console.log("Number of times 'et' appears in the string: " + etCount);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

let phraseToCheck = 'Was it a car or a cat I saw?';
let cleanedPhrase = phraseToCheck.toLowerCase().replace(/[^a-z]/g, '');

let isPalindrome = true;
for (let i = 0; i < Math.floor(cleanedPhrase.length / 2); i++) {
  if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("'" + phraseToCheck + "' is a palindrome.");
} else {
  console.log("'" + phraseToCheck + "' is not a palindrome.");
}

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'
