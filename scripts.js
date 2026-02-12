const buttonInput = document.querySelector('.button-input')
const hearInput = document.querySelector('.input')
const eventList = document.querySelector('.event-list')


function CallButtonInput(){
  if (hearInput.value === '') {
    alert('É necessário que você digite uma tarefa')
  } else {
  const newTask = document.createElement('li')

  newTask.innerHTML = hearInput.value

  eventList.appendChild(newTask)

  const message = 'Tarefa adicionada com sucesso!'
  document.querySelector('.confimation').innerHTML = message

  hearInput.value = ''
  }
}



buttonInput.addEventListener('click', CallButtonInput)