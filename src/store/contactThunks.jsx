import { createAsyncThunk } from "@reduxjs/toolkit";

// Utility Function for API Requests
const apiRequest = async (url, method, token, body = null) => {

  const response = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Accept": "application/json" ,
    },
    body: body ? JSON.stringify(body) : null,
  });

  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage = errorData.message || "Something went wrong";
    throw new Error(errorMessage);
  }
  const responseData = response.json();
  console.log("API Response Data: ", responseData);
  
  return responseData;
};

// Thunk For Fetching All Contacts.
export const fetchData = createAsyncThunk(
  "fetchData",
  async (_, { rejectWithValue, getState }) => {
    const accessToken = getState().auth.accessToken;

    try {
      const data = await apiRequest(
        "https://mycontacts-backend-flub.onrender.com/api/contacts/",
        "GET",
        accessToken
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Thunk For Fetching Contact By ID.
export const fetchContactById = createAsyncThunk(
  "fetchContactById",
  async (id, { getState, rejectWithValue }) => {
    const accessToken = getState().auth.accessToken;

    try {
      const data = await apiRequest(
        `https://mycontacts-backend-flub.onrender.com/api/contacts/${id}`,
        "GET",
        accessToken
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Thunk For Adding Contacts.
export const addContact = createAsyncThunk(
  "addContact",
  async (newContact, { getState, rejectWithValue }) => {
    const accessToken = getState().auth.accessToken;

    try {
      const data = await apiRequest(
        `https://mycontacts-backend-flub.onrender.com/api/contacts/`,
        "POST",
        accessToken,
        newContact
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Thunk For Updating Contacts.
export const updateContact = createAsyncThunk(
  "updateContact",
  async ({ id, updatedContact }, { getState, rejectWithValue }) => {
    const accessToken = getState().auth.accessToken;
    console.log(`Existing ID: ${id}, Updated Contact Data: `, updatedContact);
    
    try {
      const data = await apiRequest(
        `https://mycontacts-backend-flub.onrender.com/api/contacts/${id}`,
        "PUT",
        accessToken,
        updatedContact
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Thunk For Deleting Contacts.
export const deleteContact = createAsyncThunk(
  "deleteContact",
  async (id, { getState, rejectWithValue }) => {
    const accessToken = getState().auth.accessToken;

    try {
      const data = await apiRequest(
        `https://mycontacts-backend-flub.onrender.com/api/contacts/${id}`,
        "DELETE",
        accessToken
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
