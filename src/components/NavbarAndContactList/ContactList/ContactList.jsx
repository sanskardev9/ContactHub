import React, { useEffect } from "react";
import "./ContactList.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  fetchData,
} from "../../../store/contactThunks";
import {
  selectIsLoading,
  selectIsError,
  selectContacts,
  selectErrorMessage,
  selectToken,
} from "../../../store/selectors";
import { contactListActions } from "../../../store/contact-slice";
import { MdModeEdit } from "react-icons/md";
import { FaTrash, FaHeart } from "react-icons/fa";

const ContactList = ({ favContacts }) => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const errorMessage = useSelector(selectErrorMessage);
  const token = useSelector(selectToken);


  const handleDelete = (contactId) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      dispatch(deleteContact(contactId))
        .unwrap()
        .then(() => {
          dispatch(fetchData());
        })
        .catch((error) => {
          console.error("Falied to delete contact : ", error);
        });
    }
  };

  const handleUpdate = (contactId) => {
    dispatch(contactListActions.setExistingContact(contactId));
  };

  useEffect(() => {
    if (token) {
      dispatch(fetchData());
    }
  }, [dispatch, token]);


  const handleFav = (contactId) => {
    dispatch(contactListActions.toggleFavourite(contactId));
  };

  if (!isLoading && contacts.length != 0) {
    return (
      <div className="contact-list">
        <table>
          <thead className="table-head">
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
                  <div className="action-icons">
                    <div
                      className="edit-icon"
                      onClick={() => handleUpdate(contact._id)}
                    >
                      <MdModeEdit />
                    </div>
                    <div
                      className="delete-icon"
                      onClick={() => handleDelete(contact._id)}
                    >
                      <FaTrash />
                    </div>
                    <div
                      className="fav-icon"
                      onClick={() => handleFav(contact._id)}
                    >
                      <FaHeart />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else if (isLoading) {
    return (
      <div>
        <h1 className="loading">Loading...</h1>
      </div>
    );
  } else if (contacts.length === 0) {
    return <div>No Contacts Available</div>;
  } else {
    return <h1 className="error">Error: {errorMessage}</h1>;
  }
};

export default ContactList;
