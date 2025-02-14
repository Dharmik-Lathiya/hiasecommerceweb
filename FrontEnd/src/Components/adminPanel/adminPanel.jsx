import React from 'react'
import AdminSideMenu from './AdminSideMenu'
import "./adminPanel.css"
import { Navigate, Outlet } from 'react-router-dom'

export default function AdminPanel() {

    if(!JSON.parse(localStorage.getItem('isAdmin'))){
      return <Navigate  to={"/"}/>
    }
  return (
    <div className='main-menu-op'>
            <AdminSideMenu/>

            <Outlet/>
    </div>
  )
}
