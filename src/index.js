document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const buildButton = (e) => {
    const taskList = document.querySelector('#tasks')
    const todoText = e.target.querySelector('#new-task-description').value;
    const newTask = document.createElement("li");
    const deleteButton = document.createElement("button")

    newTask.innerText = `${todoText} `;
    deleteButton.innerText = 'x';
    deleteButton.id = 'delete-button'

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    // make delete button delete
    deleteButton.addEventListener('click', () => {
      deleteButton.parentElement.remove();
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    buildButton(e);
    console.log(document.querySelector('#delete-button'))
  };

  document.querySelector('#create-task-form').addEventListener('submit', (e) => {
    handleSubmit(e);
  })



});
