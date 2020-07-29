import React from 'react';
import './Task.css'

const task = (props) => {
    return(
        <div className = "input">
            <input 
                id = "description"
                value = {props.description} 
                type="text" 
                onChange = {props.changed} 
                placeholder="what"/>
            <br/>
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
            <br/>
            <select 
                id = "subCat"
                onChange = {props.changed}
                value = {props.subcat}>
                {/* Will depend on category selected
                Below assumes the user selected Work */}
                <option value="Select">--Select--</option>
                <option value="Coding">Coding</option>
		        <option value="Finance">Finance</option>
                <option value="Job Hunting">Job Hunting</option>
		    </select>
            <br/>
            <input type="date" id="date" name="date"
                value = {props.date}
                min="2020-01-01" 
                required 
                onChange = {props.changed}/>
            <br/>
            <input type="time" id="time" name="time" 
                required
                onChange = {props.changed}
                value = {props.time}></input>
            <br/>             
            <button 
                type="submit" 
                onClick = {props.clicked}>Add entry</button>
         </div>
        
        
    )
}

export default task

