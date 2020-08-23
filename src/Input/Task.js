import React from 'react';
import './Task.css'

const task = (props) => {
    return(
        <tr>
            <td>
                <input 
                    id = "description"
                    value = {props.description} 
                    type="text" 
                    onChange = {props.changed} 
                    placeholder="what"/>
            </td>

            <td>
                <select 
                id = "category"
                onChange = {props.changed} 
                value = {props.category}>
                    <option value="Select">--Select--</option>
                    <option value="Family">Family</option>
                    <option value="Friends">Friends</option>
                    <option value="Work">Work</option>
                    <option value="Chill Time">Chill Time</option>
                </select>
            </td>

            <td>
                <select 
                id = "subCat"
                onChange = {props.changed}
                value = {props.subcat}>
                    <option value="None">--</option>
                    <option value="Coding">Coding</option>
                    <option value="Finance">Finance</option>
                    <option value="Job Hunting">Job Hunting</option>
                </select>
            </td>

            <td>
                <input type="date" id="date" name="date"
                value = {props.date}
                min="2020-01-01" 
                required 
                onChange = {props.changed}/>
            </td>

            <td>
                <input type="time" id="time" name="time" 
                required
                onChange = {props.changed}
                value = {props.time}>
                </input>
            </td>

            <td>
                <button 
                type="submit" 
                id = "submitButton"
                onClick = {props.clicked}>Add entry</button>
            </td>
    
        </tr>  
    )
}

export default task

