import React, {useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import uuid from "uuid";

const TodoForm = ({addTodo}) => {

const [todo,setTodo] = useState({
    id: "",
    text: "",
    completed: false
});


function handleTaskInputChange(e) {
    setTodo({...todo, task: e.target.value});
}

function handleSubmit(e) {
    e.preventDefault();
    if(todo.task.trim()) {
        addTodo({...todo, id: uuid.v4()});
        // reset task input
        setTodo({...todo, task: ""});
    }
}

    return(
       <form onSubmit={handleSubmit}>
           <TextField
             label="Task"
             name="task"
             type="text"
             value={todo.task}
             onChange={handleTaskInputChange}
            />
            <Button type="submit" variant="contained" color="primary">Ajouter une tâche</Button>
       </form>
    )
}

export default TodoForm;