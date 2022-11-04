// Calculate the day of the week you born

const week = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const birthday = new Date(1986, 03, 11)

console.log(week[birthday.getDay()])
