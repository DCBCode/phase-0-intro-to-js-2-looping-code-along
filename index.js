function writeCards(names, event) {
  let messages = [];

  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return messages;
}
function countDown(num) {
  if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
    console.log('Please enter a positive integer.');
    return;
  }

  let i = num;

  while (i >= 0) {
    console.log(i);
    i--;
  }
}

countDown(10);
let countdownResult = countDown(10);
console.log(countdownResult);