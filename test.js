const myNumber = 100;

for (let i = 0; i < myNumber; i++){
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, 'fizzbuzz')
  } else if ( i % 3 === 0) {
    console.log(i, 'fizz')
  } else if ( i % 5 === 0) {
    console.log(i, 'buzz');
  } else {
    console.log(i)
  }
}

