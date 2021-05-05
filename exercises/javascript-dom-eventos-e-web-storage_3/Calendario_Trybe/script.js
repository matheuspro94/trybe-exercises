function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek()

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth(){
let getDaysList = document.querySelector('#days');
for (let index = 0; index < dezDaysList.length; index += 1) {
  let day = dezDaysList[index];
  let dayItem = document.createElement('li');

  if (day === 24 | day === 31) {
    dayItem.className = 'day holiday';
    dayItem.innerHTML = day;
    getDaysList.appendChild(dayItem);
  } else if (day === 4 | day === 11 | day === 18) {
    dayItem.className = 'day friday';
    dayItem.innerHTML = day;
    getDaysList.appendChild(dayItem)
  } else if (day === 25) {
    dayItem.className = 'day holiday friday';
    dayItem.innerHTML = day;
    getDaysList.appendChild(dayItem)
  } else {
    dayItem.className = 'day'
    dayItem.innerHTML = day;
    getDaysList.appendChild(dayItem)
  }
};
};
createDaysOfTheMonth();

function createButtonHoliday(buttonName){
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';
  
  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
}
createButtonHoliday('Feriados');

// Exercício 3
// Função que muda a cor dos dias de feriado
function createColorButtonHoliday() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if(getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};
createColorButtonHoliday()

// Exercício 4:

function createButtonFriday(buttonName){
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';
  
  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
}
createButtonHoliday('Sexta-feira');

// Exercício 5:

// function createSpotlightFridayDay(fridaysArray) {
//   let getFridayButton = document.querySelector('#btn-friday');
//   let getfriday = document.getElementsByClassName('friday-day');
//   // let textOrigin = getfriday;
//   let setNewText = 'SEXTOU!!!';

//   getFridayButton.addEventListener('click', function() {
//     for (let index = 0; index < getfriday.length; index += 1) {    
//       if(getfriday[index] !== setNewText) {
//         getfriday[index].innerHTML = setNewText;
//       } else {
//         getfriday[index].innerHTML = fridaysArray[index];
//       }
//     }
//   })
// };
// let dayFridays = [4, 11, 18 , 25];
// createSpotlightFridayDay(dayFridays);

function displayFridays(fridaysArray) {
  const getFridayButton = document.getElementById('btn-friday');
  const fridays = document.querySelectorAll('friday');
  const newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
      };
    };
  });
};

let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);

// Exercício 6:

function dayMouseOver() {
  let days = document.querySelector('#days');
  
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeigth = '600';
  })
}

function dayMouseOut() {
  let day = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeigth = '200';
    event.target.style.fontSize = '20px';
  })
} 

dayMouseOver()
dayMouseOut();

// Exercício 7:

function newTaskSpan(task) {
  let TasksContainer = document.querySelector('.my-tasks');
  let createTaskName = document.createElement('span');

  createTaskName.innerHTML = task;
  TasksContainer.appendChild(createTaskName);
};

newTaskSpan('Cozinhar');

// Exercício 8

function newTaskDiv(color) {
  let TasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  TasksContainer.appendChild(newTask)
}
newTaskDiv('green');

// Exercício 9

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass()
