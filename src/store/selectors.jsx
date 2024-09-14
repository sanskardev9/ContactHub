export const selectContacts = (state) => state.contacts.contacts;
export const selectContact = (state) => state.contacts.contact;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectIsError = (state) => state.contacts.isError;
export const selectErrorMessage = (state) => state.contacts.errorMessage;
export const selectToken = (state) => state.auth.accessToken 