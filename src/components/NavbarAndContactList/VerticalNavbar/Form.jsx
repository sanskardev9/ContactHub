import React, { useEffect, useState } from "react";
import "./Form.css";
import addnewImage from "../../../assets/add-new.svg";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import {
  addContact,
  fetchContactById,
  fetchData,
  updateContact,
} from "../../../store/contactThunks";
import {
  selectIsError,
  selectIsLoading,
  selectErrorMessage,
  selectKey,
} from "../../../store/selectors";
import { contactListActions } from "../../../store/contact-slice";

const Form = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });

  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectErrorMessage);
  const existingUserKey = useSelector(selectKey);

  useEffect(() => {
    const fetchContact = async () => {
      if (existingUserKey) {
        try {
          // Waiting for the data to come from the backend
          const existingContact = await dispatch(
            fetchContactById(existingUserKey)
          ).unwrap();

          // Set the fetched contact data to the form
          setUserData({
            name: existingContact?.name || "",
            surname: existingContact?.surname || "",
            phone: existingContact?.phone || "",
            email: existingContact?.email || "",
          });
        } catch (err) {
          console.error("Failed to fetch the existing user.", err);
        }
      }
    };

    fetchContact();
  }, [existingUserKey]);

  const submitHandler = async(e) => {
    e.preventDefault();

    if(existingUserKey) {
      console.log("Updating Contact: ", { id: existingUserKey, updatedContact: userData });
      await dispatch(updateContact({id: existingUserKey, updatedContact: userData})).unwrap();
      await dispatch(fetchData()).unwrap();
      dispatch(contactListActions.resetKey());
    }
    else{
      console.log("Adding New Contact: ", userData);
      await dispatch(addContact(userData)).unwrap();
      dispatch(contactListActions.resetKey());

    }
    setUserData({
      name: "",
      surname: "",
      phone: "",
      email: "",
    });
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUserData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="add-new-img">
        <img src={addnewImage} />
      </div>
      <div className="input-text">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={userData.name}
          onChange={inputHandler}
          required
        />
        <input
          type="text"
          placeholder="Surname"
          name="surname"
          value={userData.surname}
          onChange={inputHandler}
          required
        />
      </div>
      <div className="input-tel">
        <input
          type="text"
          placeholder="Phone Number"
          name="phone"
          value={userData.phone}
          onChange={inputHandler}
          required
        />
      </div>
      <div className="input-text">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={inputHandler}
          required
        />
      </div>

      <Button name={existingUserKey ? 'Update' : 'Add'} />
    </form>
  );
};

export default Form;
