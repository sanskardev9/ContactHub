import { createSlice } from "@reduxjs/toolkit";
import {
  fetchData,
  fetchContactById,
  addContact,
  updateContact,
  deleteContact,
} from "./contactThunks";

const initialState = {
  key:'',
  contacts: [],
  contact: null, // For a single contact
  isLoading: false,
  isError: false,
  errorMessage: null,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setExistingContact: (state, action) => {
      state.key = action.payload;
    }
  },
  extraReducers: (builder) => {
    // Fetch All Contacts
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
        console.log("All Contacts : ", action.payload);
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Failed to fetch contacts";
      });

    // Fetch Contacts By ID
    builder
      .addCase(fetchContactById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContactById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contact = action.payload;
        console.log("Fetched By ID : ", action.payload);
      })
      .addCase(fetchContactById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Failed to fetch contact";
      });

    // Adding New Contact
    builder
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
        console.log("New Contact : ", action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Failed to add new contact";
      });

    // Updating Existing Contact
    builder
      .addCase(updateContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.contacts.findIndex(
          (contact) => contact.id === action.payload.id
        );
        if(index !== -1){
          state.contacts[index] = action.payload;
          console.log("Updated Contact : ", state.contacts[index]);
        }
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Failed to update the contact";
      });

    // Deleting Existing Contact
    builder
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
        console.log("Updated Contacts", state.contacts );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Failed to delete the contact";
      });
  },
});


export const contactListActions = contactSlice.actions;
export default contactSlice.reducer;

