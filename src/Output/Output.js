import React from 'react';
import './Output.css';

const output = (props) => {
    console.log(props);
    return(
       <div>
            <table className="table">
                <thead className="header">
                    <tr>
                        <td>Description</td>
                        <td>Category</td>
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
                            <td>{task.date}</td>
                            <td>{task.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>  
       </div>
    )

        
     
}

export default output