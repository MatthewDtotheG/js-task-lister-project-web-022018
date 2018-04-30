document.addEventListener('DOMContentLoaded', () => {

  const createList = document.getElementById('create-list-form')
  const appContent = document.getElementById('app-content')
  const lists = document.getElementById('lists')
  let newTitle = document.getElementById('new-list-title')
  let parentList = null
  // const app = new TaskLister();
  createList.addEventListener('submit', addForm)

    function addForm(e){
      console.log('I can do it')
      e.preventDefault()
        // console.log(stuff.length)
       if(stuff.length === 0){
          appContent.innerHTML = (`
            <form id="create-task-form">
            <label for="parent-list">Select List:</label>
            <select id="parent-list"></select>
            <label for="new-task-description">Task description:</label>
            <input required type="text" id="new-task-description" placeholder="description">
            <label for="new-task-priority">Priority level:</label>
            <input type="text" id="new-task-priority" placeholder="priority">
            <input type="submit" value="Create New Task">
            </form>`)
            document.getElementById('create-task-form').addEventListener('submit', addTask)
        }
          stuff.push(newTitle.value)
          console.log(stuff)
          parentList = document.getElementById('parent-list')
          parentList.innerHTML = ''
          stuff.map(x => parentList.innerHTML += (`<option selected>${x}</option>`))
          addTitle()
      }

        function addTitle(){
              lists.innerHTML += (`
                <div id='track-delete-${newTitle.value}'>
                  <h2> ${newTitle.value}
                  <button id='delete-${newTitle.value}' data-title="${newTitle.value}" class="delete-list">
                  X
                  </button
                  </h2>
                  <ul id="${newTitle.value}">
                  </ul>
                </div>`)

                document.getElementById('lists').addEventListener('click', deleteList)
                newTitle.value = ''
        }

          function addTask(e){
            e.preventDefault()
            let taskDescription = document.getElementById('new-task-description')
            let taskPriority = document.getElementById('new-task-priority')
            document.getElementById(`${parentList.options[parentList.selectedIndex].value}`).innerHTML += (`
                  <li>
                  Task: ${taskDescription.value}
                  <button class="delete-task">
                  X
                  </button>
                  <br>
                  Priority: ${taskPriority.value}
                  </li>`)
                  // taskDescription.innerHTML = ''
                  // taskPriority.innerHTML = ''
          }

          function deleteList(e){
            console.log(e.target.tagName)
              if (e.target.tagName === "BUTTON") {
                  document.getElementById(`track-${e.target.id}`).remove()
            }
          }

})

let stuff = []
