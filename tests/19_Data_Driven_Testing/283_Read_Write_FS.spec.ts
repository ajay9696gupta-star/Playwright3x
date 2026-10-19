const path = require('path');
const fs = require('fs');

// Build the file path
const filePath = path.join(__dirname, '280_Users.json');

console.log('File path:', filePath);

// Read the JSON file
const fileData = fs.readFileSync(filePath, 'utf-8');

// Convert JSON string into a JavaScript object
const userDataJSONObject = JSON.parse(fileData);

console.log(userDataJSONObject);

// Print the username
console.log(userDataJSONObject.username);