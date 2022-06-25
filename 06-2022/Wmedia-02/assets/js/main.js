let employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
];

for (let i = 0; i < employees.length; i++) {
  const element = employees[i];
  console.log(element);
}

// n representa el elemento que utilizamos para recorrer el array
employees.forEach((n) => console.log(n));
employees.forEach(function (employee, index) {
  console.log(employee, index);
});

const highTier = employees.filter(function (employee) {
  return employee.salary > 75000;
});
const maxTier = employees.filter((n) => n.salary > 75000);

console.log(employees);
console.log(highTier);
console.log(maxTier);

const uppercase = employees.map((n) => n.name.toUpperCase());
console.log(uppercase);
console.log(employees);

const employeesTier = employees.map(function (employee) {
  return {
    name: employee.name,
    tier: employees.salary > 75000 ? "high" : "mid",
  };
});

console.log(employeesTier);

// Array sort

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort();

console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

const sortedEmployees = [...employees].sort(function (a, b) {
  return a.salary - b.salary;
});

console.log(sortedEmployees);

// Array reduce
const orden = [1, 2, 3, 4, 5, 6, 7];

const ordenReduce = orden.reduce(function (previous, current) {
  console.log(previous, current);
  return previous + current;
});

console.log(ordenReduce);

const totalSalaries = employees.reduce(function (previous, current) {
  return previous + current.salary;
}, 0);

console.log(totalSalaries);

const totalSalaries2 = employees.reduce(
  (previous, current) => previous + current.salary,
  0
);

console.log(totalSalaries2);

// Method chaining

const totalHighTier = employees.map((n) => n.salary).filter((n) => n > 75000).reduce((total,current) => total + current);

console.log(totalHighTier);
