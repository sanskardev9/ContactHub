import React, { useState } from "react";
import "./Form.css";
import addnewImage from "../../../assets/add-new.svg";
import { useDispatch } from "react-redux";
import Button from "../../UI/Button";
import { contactListActions } from "../../../store/contact-slice";

const Form = () => {

  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    phone: ""
  });

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(contactListActions.addContact(userData))

    setUserData({
      name: '',
      surname: '',
      phone: '' 
    })
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
      <Button name="Add" />
    </form>
  );
};

export default Form;
