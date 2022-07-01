const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");
const saturday = document.getElementById("saturday");
const sunday = document.getElementById("sunday");

const daysArray = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]

const amount = document.querySelectorAll('.bars__amonut');



// Fecth Json from data.json
const data = fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const arrayData = data.map(n => parseInt(n.amount * 4));

    for (let i = 0; i < daysArray.length; i++) {
      const value = arrayData[i];;
      daysArray[i].setAttribute('style', 'height:' + value + 'px')
    }

  })
  .catch(error => console.log(error))

// Pendiente de insertar valores en el hover de cada barra
