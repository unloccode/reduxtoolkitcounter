import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPerson } from './contactSlice';

export function AddFormPerson(){
    const [person, setPerson] = useState('');
    const dispatch = useDispatch();
    function handleChange(e){
        setPerson(e.target.value);
    }
    function handleSubmit(e){
        if(person !== ''){
            //do something
            //send data back to store
            dispatch(addPerson(person));
            setPerson('');
        }
        e.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Add new contact"
            onChange={handleChange}
            value={person}
            />
            <button type="submit" >Add</button>
        </form>
    );
}