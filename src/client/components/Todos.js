import React, { useReducer, useState, useRef } from 'react'
import '../styles/todos.scss'

import todosReducer, { initialState, addTodo, removeTodo, changeStatus } from '../reducers/todosReducer'

const Todos = () => {
    // reducer for state management of todos array
    const [state, dispatch] = useReducer(todosReducer, initialState)

    // reduce fn to calculate # of active todos
    const calcActives = (todos) => {
        return todos.reduce((accumulator, todo) => {
            if (!todo.isCompleted) return ++accumulator
            else return accumulator
        }, 0)
    }
    const activesCount = state.todos ? calcActives(state.todos) : 0

    // state of form input and event handlers
    const [description, setDescription] = useState('')
    const [isEmpty, setIsEmpty] = useState(true)
    const handleSubmit = (evt) => {
        evt.preventDefault()
        setDescription('')
        setIsEmpty(true)
        return dispatch(addTodo(description))
    }
    const handleChange = (evt) => {
        setDescription(evt.target.value)
        if (!evt.target.value) setIsEmpty(true)
        else setIsEmpty(false)
    }

    // DOM ref, state and event handlers for todo <li> hover events
    let refs = useRef(new Map()).current
    const [hovered, setHovered] = useState({todoId: null, bool: false})
    const handleEnter = (evt, id) => {
        if (event.target.classList.contains('button--status')) return
        return setHovered({todoId: id, bool: true})
    }
    const handleLeave = (evt, id) => {
        if (event.target.classList.contains('button--status')) return
        return setHovered({todoId: id, bool: false})
    }

    // delete button event handler
    const handleDelete = (todo) => {
        return dispatch(removeTodo(todo))
    }
    // mark-complete button event handler
    const handleStatus = (todo) => {
        return dispatch(changeStatus(todo))
    }

    return (
        <main className="wrapper">
            <header className="box header">
                <h3 >Todos List</h3>
                {state.todos && (
                    <p>
                        <strong>{activesCount}</strong>
                        <span>{` item${activesCount === 1 ? '' : 's'}`}</span>
                    </p>
                )}
            </header>
            <form className="form box" onSubmit={handleSubmit}>
                <input className="input" type="text" autoFocus value={description} onChange={handleChange}/>
                <button className="button--add" type="Submit" disabled={isEmpty}>
                    <span className="symbol--add">+</span>
                </button>
            </form>
            {!!state.todos.length && (
                <ul>
                    {state.todos.map((todo) => {
                        return (
                            <li key={todo.id} className={todo.isCompleted ? "item-completed" : "item-incomplete"} onMouseEnter={(evt) => handleEnter(evt, todo.id)}
                            onMouseLeave={(evt) => handleLeave(evt, todo.id)}
                            ref={inst => inst === null ? refs.delete(todo.id) : refs.set(todo.id, inst)} >
                                <span className="description">{todo.description}</span>
                                {hovered.bool && (hovered.todoId === todo.id) &&
                                <button className="delete" onClick={() => handleDelete(todo)}><span>Delete?</span></button>}
                                <button className={(todo.isCompleted && "button--status-completed") || "button--status"} onMouseEnter={(evt) => handleEnter(evt)}
                            onMouseLeave={(evt) => handleLeave(evt)} onClick={() => handleStatus(todo)}>
                                    <span className="symbol--status">✓</span>
                                </button>
                            </li>
                        )
                    })}
                </ul>
            )}
        </main>
    )
}

export default Todos
