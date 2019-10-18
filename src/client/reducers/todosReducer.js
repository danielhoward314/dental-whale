import uuid from 'uuid/v4'

export const initialState = {
  todos: []
}

const ADD = 'ADD'
const REMOVE = 'REMOVE'
const CHANGE_STATUS = 'CHANGE_STATUS'

export const addTodo = (description) => {
  description = description.trim()
  const id = uuid()
  return {
    type: ADD,
    todo: {
      id,
      description,
      isCompleted: false
    }
  }
}

export const removeTodo = (todo) => {
  return {
    type: REMOVE,
    todo
  }
}

export const changeStatus = (todo) => ({type: CHANGE_STATUS, todo})

function todosReducer(state, action) {
  switch (action.type) {
    case ADD:
      return {
        todos: state.todos.concat(action.todo)
      }
    case REMOVE:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.todo.id)
      }
    case CHANGE_STATUS:
      return {
        todos: state.todos.filter((todo) => {
          if (todo.id !== action.todo.id) return todo
          todo.isCompleted = !todo.isCompleted
          return todo
        })
      }
    default:
      return state
  }
}

export default todosReducer
