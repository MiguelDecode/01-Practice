const name = "Miguel";

const surname = "Decode";

const student = `${name} ${surname}`;

const uppercaseStudent = student.toUpperCase();

const lowercaseStudent = student.toLowerCase();

const lettersOf = student.length;

const firstLetterName = name.charAt(0);

const firstLetterSurname = surname.charAt(0);

const lastLetterSurname = surname.charAt(surname.length - 1);

const withoutSpaces = student.split(" ");

const isInside = student.includes("Miguel")

console.log(
  name,
  surname,
  student,
  uppercaseStudent,
  lowercaseStudent,
  lettersOf,
  firstLetterName,
  firstLetterSurname,
  lastLetterSurname,
  withoutSpaces,
  isInside
);
