import React from "react";
import ToDoRowItem from "./TodoRowItem";

function ToDoTable(props: {
    todos: TodoModel[],
    deleteTodo: Function
}) {
    return (
        <table className = "table table-hover">
            <thead>
                <tr>
                    <th scope = 'col'>#</th>
                    <th scope = 'col'>Description</th>
                    <th scope = 'col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
               {
                props.todos.map(todo  => (
                    <ToDoRowItem 
                        deleteTodo = {props.deleteTodo}
                        key = {todo.rowNumber}
                        rowNumber = {todo.rowNumber}
                        rowDescription = {todo.rowDescription}                                                      
                        rowAssigned = {todo.rowAssigned}
                    />
                ))
               }
            </tbody>
        </table>
    );
}

export default ToDoTable;