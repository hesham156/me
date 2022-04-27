import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import User from './user/User'

const Admin = () => {
    const[user,SetUser]=useState()
    useEffect(()=>{
        if(localStorage.getItem('user')===null){
            window.location.href = '/'
            SetUser([])

        }
        else{
            SetUser(<User/>)
        }
    },[])
  return (
    <div>
        {user}
    </div>
  )
}

export default Admin