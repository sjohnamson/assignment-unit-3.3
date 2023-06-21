console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40
console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
const supplyChanges = [3, 5, -6, 0, 7, 11];
console.log(supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log(supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');
let removedSupply = supplyChanges.pop();
console.log(removedSupply);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');
for (i = 0; i < supplyChanges.length; i++) {
    if (supplyChanges[i] > 0) {
        console.log(`Added ${supplyChanges[i]} parts.`);
    } else if (supplyChanges[i] === 0) {
        console.log('No change');
    } else if (supplyChanges[i] < 0) {
        console.log(`Removed ${supplyChanges[i] * -1} parts.`);
    }
}



// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');
for (entry of supplyChanges) {
    if (entry > 0) {
        console.log(`Added ${entry} parts.`);
    } else if (entry === 0) {
        console.log('No change');
    } else if (entry < 0) {
        console.log(`Removed ${entry * -1} parts.`);
    }
}

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
let totalSupplies = 0;
console.log('8. Total supplies available is:');
for (entry of supplyChanges) {
    totalSupplies = totalSupplies + entry;
}
console.log(totalSupplies);

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
let parts = 572
let boxes = 0
console.log('9. Filling boxes with a "while" loop');
while (parts >= 7) {
    boxes++
    parts = parts - 7
}

console.log(`The number of filled boxes is: ${boxes}`);
console.log(`There are ${parts} remaining parts.`);