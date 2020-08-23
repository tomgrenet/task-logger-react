import React from 'react';
import './Output.css';

const output = (props) => {
    return(
        props.tasks.map((task, index) => (
            <tr key = {index}>
                <td>{task.description}</td>
                <td>{task.category}</td>
                <td>{task.subcat}</td>
                <td>{task.date}</td>
                <td>{task.time}</td>
                <td><button onClick = {() => props.edit(index)}>Edit</button></td>
                <td><button onClick = {() => props.delete(index)}>Delete</button> </td> 
            </tr>
        ))
    )   
}

export default output