import React, { useEffect } from 'react';
import { getCurrentUser } from '../apiCalls/user';
import {  Link, useNavigate } from 'react-router-dom';
import { setUser } from '../redux/userSlice';
import { Breadcrumb, Layout, Menu} from 'antd';
import { HomeOutlined, LogoutOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;



import { useDispatch, useSelector } from 'react-redux';

export default function ProtectedRoutes({children}) {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.user)
  const items = [{key: 'Home', label: 'Home', icon: <HomeOutlined />}, {key: user?.name, label: user?.name, icon: <UserOutlined />, children:[{label: 'Profile', icon: <ProfileOutlined/>}, {label: <Link to="/login" onClick={() => localStorage.removeItem('token')}>Log Out</Link>, icon: <LogoutOutlined/>}]} ]
  console.log("stateUser", user)
  useEffect(() => {
    if(localStorage.getItem('token')) {
      getValidUser()
    } else {
      navigate('/login')
    }
  }, [])

  const getValidUser = async() => {
    try {
     
      const response = await getCurrentUser();
      if(response.success) {
        dispatch(setUser(response.data));
      }
   
    } catch(err) {
      console.log(err)
    }
  }
  return <div><Layout>
  <Header style={{ display: 'flex', alignItems: 'center' }}>
      <h3 style={{color: 'whiteSmoke', }}>Book My Show</h3>
    <div className="demo-logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      items={items}

      style={{ flex: 1, minWidth: 0, width:'100%', justifyContent: 'end' }}
    /> 

  </Header>
<div>{children}</div>

</Layout></div>
}
