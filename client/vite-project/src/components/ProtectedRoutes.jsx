import React, { useEffect } from 'react';
import { getCurrentUser } from '../apiCalls/user';
import {  useNavigate } from 'react-router-dom';

export default function ProtectedRoutes({children}) {

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')) {
      getValidUser()
    } else {
      navigate('/login')
    }
  }, [navigate])

  const getValidUser = async() => {
    try {
     
      const response = await getCurrentUser();
      console.log(response)
    } catch(err) {
      console.log(err)
    }
  }
  return <div>{children}</div>
}
