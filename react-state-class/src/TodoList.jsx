import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList() {
    let [todos, setTodos] = useState([{task : "sample task", id : uuidv4(), isDone : false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=> {
        setTodos((prevTodos) => {
            return [...prevTodos, {task : newTodo, id : uuidv4(), isDone : false}]
        });
        setNewTodo("");
        // console.log("We have to add new task in todo");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
        // console.log(event.target.value)
    }

    let deleteTodo = (id)=> {
        setTodos(todos.filter((todo) => todo.id != id ));
        
    }

    let upperCaseAll = ()=> {
        setTodos((todos) => 
            todos.map((todo) => {
                return {
                    ...todo,
                    task : todo.task.toUpperCase(),
                }
            })) 
        }

    let markAllDone = ()=> {
        setTodos((todos) => 
            todos.map((todo) => {
                return {
                    ...todo,
                    isDone : true,
                }
            })) 
        }    
    

    let markAsDone = (id)=> {
        setTodos((todos) => 
        todos.map((todo) => {
            if(todo.id == id){
                return {
                    ...todo,
                    isDone : true,
                }
            } else {
                return todo;
            }
           }) 
        )
    }


    return (
        <>
        <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
        <br/><br/>
        <button onClick={addNewTask}>Add Task</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <hr/>
        <h1>TodoList</h1>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span style={todo.isDone ? {textDecorationLine : "line-through"} : {}}>{todo.task}</span>
                    &nbsp; &nbsp; &nbsp;
                    <button onClick={() => deleteTodo(todo.id)}>delete</button>  
                    &nbsp; &nbsp; &nbsp;
                    <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>  
                </li>
            ))}
        </ul>
        <button onClick={markAllDone}>Mark all Done</button>
        </>
    )
}