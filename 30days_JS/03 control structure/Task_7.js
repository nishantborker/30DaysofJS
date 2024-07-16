let year = 1900;

if (year % 4 === 0) {
  if (year % 100 === 0 && year % 400 === 0) {
    console.log(`${year} is a Leap Year`);
  } else console.log(`${year} is not a Leap year`);
} else console.log(`${year} is not a Leap year`);
