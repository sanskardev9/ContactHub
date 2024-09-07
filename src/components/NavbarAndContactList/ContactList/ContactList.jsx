import React from 'react'
import './ContactList.css'

const ContactList = () => {
  return (
    <div className='contact-list'>
      <table>
        <thead>
          <tr>
            <th><p>Profile</p></th>
            <th><p>Name</p></th>
            <th><p>Surname</p></th>
            <th><p>Mobile</p></th>
            <th><p>Actions</p></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className='profile-img-box'>
                 <i className='fa-solid fa-user'/>
              </div>
            </td>
            <td><h2>Sanskar</h2></td>
            <td><h2>Singh</h2></td>
            <td><h2>9818845869</h2></td>
            <td>
              <div>
                <i className='fa-solid fa-pen'/>
                <i className='fa-solid fa-trash'/>
                <i className='fa-solid fa-heart'/>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ContactList