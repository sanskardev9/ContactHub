import React from 'react'
import './FavContactList.css'
import { useSelector } from 'react-redux'
import ContactList from '../ContactList/ContactList'

const FavContactList = () => {

  const contacts = useSelector((state => state.contacts.contacts));
  const favContacts = contacts.filter(contact => contact.isFavourite);

  return (
    <>
    {favContacts.length > 0 ? (
      <ContactList favContacts={favContacts} /> 
    ) : (
      <div>No Favourite Contacts</div>
    )}
    </>
  )
}

export default FavContactList