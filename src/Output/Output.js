import React from 'react';
import './Output.css';

const output = (props) => {
    return(
       <div>
            <table className="table">
                <thead className="header">
                    <tr>
                        <td>Description</td>
                        <td>Category</td>
                        <td>Sub-category</td>
                        <td>Date</td>
                        <td>Time</td>
                    </tr>
                </thead>
                <tbody>
                    {/* Why is it props.tasks.map and not props.map?? Looks like props is NOT the array but the parent of the object? */}
                    {props.tasks.map((task, index) => (
                        <tr key = {index}>
                            <td>{task.description}</td>
                            <td>{task.category}</td>
                            <td>{task.subcat}</td>
                            <td>{task.date}</td>
                            <td>{task.time}</td>
                            <td><button onClick = {() => props.edit(index)}>Edit</button></td>
                            <td><button onClick = {() => props.delete(index)}>Delete</button> </td> 
                        </tr>
                    ))}
                </tbody>
            </table>  
       </div>
    )

        
     
}

export default output