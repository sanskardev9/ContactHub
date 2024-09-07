import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    contact: {
        name: '',
        surname: '',
        phone: ''
    }
}

const contactSlice = createSlice({
    name: 'contactList',
    initialState,
    reducers: {
        addContact : (state, action) => {
            fetch('https://mycontacts-backend-flub.onrender.com/api/contacts/',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify()
                }
            )}
    }
})

export const contactListActions = contactSlice.actions;
export default contactSlice;