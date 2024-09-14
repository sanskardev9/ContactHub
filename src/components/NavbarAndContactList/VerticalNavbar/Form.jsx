import React, { useState } from "react";
import "./Form.css";
import addnewImage from "../../../assets/add-new.svg";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import { addContact } from "../../../store/contactThunks";
import { selectIsError, selectIsLoading, selectErrorMessage } from "../../../store/selectors";

const Form = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectErrorMessage);

  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: ""
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addContact(userData))
      setUserData({
        name: '',
        surname: '',
        phone: '',
        email: ''
      });
  };

  const inputHandler = (e) => {

    const {name, value} = e.target
    setUserData((preValue) => {
      return {
        ...preValue,
        [name]: value
      }
    }) 
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="add-new-img">
        <img src={addnewImage} />
      </div>
      <div className="input-text">
        <input type="text" placeholder="Name"  name= "name" value={userData.name} onChange={inputHandler} required />
        <input type="text" placeholder="Surname" name= "surname" value={userData.surname} onChange={inputHandler} required />
      </div>
      <div className="input-tel">
        <input type="text" placeholder="Phone Number" name= "phone" value={userData.phone} onChange={inputHandler} required />
      </div>
      <div className="input-text">
        <input type="email" placeholder="Email" name= "email" value={userData.email} onChange={inputHandler} required />
      </div>
     
      <Button name="Add" />
    </form>
  );
};

export default Form;
