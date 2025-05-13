



import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Profile = () => {

    const {signOut} = UserAuth()


  return (
    <div>
Profile Page

<button onClick={signOut} >Sign Out</button>
    </div>
  )
}

export default Profile
