import React, {useState} from 'react'

// How do I add a new todo item to my list?
// Take my text and push it to the array of data/tasks

// How can i keep track of what I typed in my input
// everytime i change the input i wanna update my input state


const TaskInput = ({ tasks, setTasks, theme }) => {
  
  const [input, setInput] = useState('')

  // taking user input and updating state
  const handleChange = (e) =>{ 
    setInput(e.target.value)
  }
  
  // creating a new object with input state and pushing object to data array
  const handleForm = (e) => {
    e.preventDefault()

    // creating the next ID in data array thru a function
    const generateId = array => {
      const taskIDs = array.map(item => item.id)
      // console.log(Math.max(...taskIDs))
      return Math.max(...taskIDs) + 1
    }
    
    // create new todo object
    const newTask = {
      // id: task.length+1, - doesn't work if IDs are random numbers
      id: generateId(tasks), // assigning next ID to new task
      text: input,
      completed: false
    }

    setTasks([newTask, ...tasks])
    
    document.getElementById('todo-input').value = ''
    //setInput('') doesn't work
  }

  // console.log(tasks)

  return (
    <div className={`task-input ${theme}`}>

      <div className='check'>
       {/* <div className='check-mark'></div> */}
      </div>

      <div className='new-todo-input'>
        <form onSubmit={handleForm}>
          <input id='todo-input' className={theme} type='text' maxLength='30' placeholder='Create a new todo...' onChange={handleChange}></input>
        </form>
      </div>

    </div>
  )
}

export default TaskInput