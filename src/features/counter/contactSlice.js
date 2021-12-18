import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
    name: 'saveme',
    initialState: {
        contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"],
    },
    reducers: {
        addPerson: (state, action) => {
            //check array length
            console.log(state.contacts.length);
            if(state.contacts.length !== 0){
                state.contacts.forEach((user)=>{
                    console.log(user);
                });
            }else{
                console.log('No data on the array');
            }
            //console.log(action.payload)
            //push new data to the array
            //console.log(...state.contacts);
            state.contacts = [...state.contacts, action.payload]
        }
    },
});

export const { addPerson } = contactSlice.actions;
export default contactSlice.reducer;