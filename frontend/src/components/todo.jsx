import React, { useState } from 'react'


const Todo = () => {
    const [todoList, setTodoList] = useState([])

    const addNewTodo = (e) => {
        if (e.code === 'Enter') {
            console.log(e.target.value);
            setTodoList([...todoList, e.target.value])
            console.log([...todoList, e.target.value])

            e.target.value = "";
        }
    };
    const removeTodo = (index) => {
        console.log(index);
        // todoList.splice(index, 1);
        const temp = todoList;
        temp.splice(index, 1);
        setTodoList([...temp]);
    }
  return (
    <div className="container vh-100 py-5">
        <h1 className="text-center">Todo List</h1>
        <div className="card mt-5">
            <div className="card-header">
                <input type="text" className="form-control" placeholder="Add a task"
                onKeyDown = {addNewTodo} />
            </div>
            <div className ="card-body ">
                {todoList.map((todo,index) => {
                    return(
                        <div className="d-flex justify-content-between mt-3">
                            <h5>{todo}</h5>
                            <button className='btn btn-danger' 
                            onClick={() => { removeTodo(index)}}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>

    </div>
  )
}

export default Todo