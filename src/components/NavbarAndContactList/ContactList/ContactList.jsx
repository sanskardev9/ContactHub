import React, { useEffect } from "react";
import "./ContactList.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchData, fetchContactById } from "../../../store/contactThunks";
import { selectIsLoading, selectIsError, selectContacts, selectErrorMessage, selectToken } from "../../../store/selectors";

const ContactList = () => {
  const dispatch = useDispatch();
  
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const errorMessage = useSelector(selectErrorMessage);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(fetchData());
    }
  }, [dispatch, token]);

  useEffect(() => {
    console.log('Contacts:', contacts);
  }, [contacts]);

  const handleDelete = (contactId) => {
    if(window.confirm('Are you sure you want to delete this contact?')) {
      dispatch(deleteContact(contactId))
      .unwrap()
      .then(() => {
        dispatch(fetchData());
      })
      .catch((error) => {
        console.error('Falied to delete contact : ',error);
      })
    }
  };

  const handleUpdate = (contactId) => {
    dispatch(fetchContactById(contactId))
  }

  if (isLoading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (isError) {
    return <h1 className="error">Error: {errorMessage}</h1>;
  }

  if (contacts.length === 0) {
    return <h1 className="no-data">No Contacts Available</h1>;
  }

  return (
    
    <div className="contact-list">
      <table>
        <thead>
          <tr>
            <th>
              <p>Profile</p>
            </th>
            <th>
              <p>Name</p>
            </th>
            <th>
              <p>Surname</p>
            </th>
            <th>
              <p>Mobile</p>
            </th>
            <th>
              <p>E-mail</p>
            </th>
            <th>
              <p>Actions</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td className="user-icon">
                <div className="profile-img-box">
                  <i className="fa-solid fa-user" />
                </div>
              </td>
              <td>
                <h2>{contact.name}</h2>
              </td>
              <td>
                <h2>{contact.surname}</h2>
              </td>
              <td>
                <h2>{contact.phone}</h2>
              </td>
              <td>
                <h2>{contact.email}</h2>
              </td>
              <td>
                <div>
                  <i className="fa-solid fa-pen" onClick={() => handleUpdate(contact._id)} />
                  <i className="fa-solid fa-trash" onClick={() => handleDelete(contact._id)}/>
                  <i className="fa-solid fa-heart" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;



