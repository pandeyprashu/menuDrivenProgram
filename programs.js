function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function sumOfDigits(number) {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}

function reverse(num) {
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}

function prime(num) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break; // If a factor is found, exit the loop
    }
  }

  if (isPrime && num > 1) {
    return `${num} is a Prime number`;
  } else {
    return `${num} is not a Prime number`;
  }
}

function leapYear(year) {
  if (year % 400 == 0) {
    return "Given year is a leap year";
  } else if (year % 100 == 0) {
    return "Given yer is not a leap year";
  } else if (year % 4 == 0) {
    return "Given year is a leap year";
  } else {
    return "Given year is not a leap year";
  }
}

function oddEven(num) {
  if (num % 2 == 0) {
    return "Given number is a even number";
  } else {
    return "Given number is odd numebr";
  }
}
