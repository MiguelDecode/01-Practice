const employees = ["Alexander", "Ana", "Zion"];

// Imperativo COMO
const results = [];
for (let i = 0; i < employees.length; i++) {
  const element = employees[i];
  if (element.length > 4) results.push(element);
}

console.log(results);

const results2 = [];
employees.forEach(function (employee) {
  if (employee.length > 4) {
    results2.push(employee);
  }
});

console.log(results2);

// Declarativa QUÉ

const results3 = employees.filter((employee) => employee.length > 4);

console.log(results3);

// Usando for off

const results4 = [];
for (const employee of employees) {
  if (employee.length > 4) results4.push(employee);
}

console.log(results4);

const string = 'Esto es una string'
for (const letter of string) {
  console.log(letter);
}

const developer = {name: 'Juan', city: 'Valenncia', skills: ['JavaScript', 'Vue', 'CSS']}

for (const [key,value] of Object.entries(developer)) {
  console.log(key,value);
};