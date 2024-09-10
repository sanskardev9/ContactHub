import React, { useEffect, useState } from 'react'
import './ContactList.css'
import { useSelector } from 'react-redux'

const ContactList = () => {

  const [contacts, setContacts] = useState([]);
  const token = useSelector((state) => state.auth.accessToken)

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch('https://mycontacts-backend-flub.onrender.com/api/contacts/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    if (token) {
      fetchContacts();
    }

  },[token]);
  

  return (
    <div className='contact-list'>
      <table>
        <thead>
          <tr>
            <th><p>Profile</p></th>
            <th><p>Name</p></th>
            <th><p>Surname</p></th>
            <th><p>Mobile</p></th>
            <th><p>E-mail</p></th>
            <th><p>Actions</p></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td className='user-icon'>
                <div className='profile-img-box'>
                  <i className='fa-solid fa-user'/>
                </div>
              </td>
              <td><h2>{contact.name}</h2></td>
              <td><h2>{contact.surname}</h2></td>
              <td><h2>{contact.phone}</h2></td>
              <td><h2>{contact.email}</h2></td>
              <td>
                <div>
                  <i className='fa-solid fa-pen' />
                  <i className='fa-solid fa-trash' />
                  <i className='fa-solid fa-heart' />
                </div>
               </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ContactList










// <tr>
//             <td className='user-icon'>
              
//             </td>
//             <td><h2>Sanskar</h2></td>
//             <td><h2>Singh</h2></td>
//             <td><h2>9818845869</h2></td>
//             <td><h2>sanskar@gmail.com</h2></td>
//             <td>
//               <div>
//                 <i className='fa-solid fa-pen'/>
//                 <i className='fa-solid fa-trash'/>
//                 <i className='fa-solid fa-heart'/>
//               </div>
//             </td>
//           </tr>