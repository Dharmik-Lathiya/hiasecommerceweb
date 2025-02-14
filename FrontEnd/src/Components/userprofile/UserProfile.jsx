import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import UserOrderList from './UserOrderList.jsx';
import Header from '../Header.jsx';

export default function UserProfile() {


  if (!JSON.parse(localStorage.getItem('isLogedIn'))) {
    return <Navigate to={"/"} />
  }
  else if(JSON.parse(localStorage.getItem('isAdmin'))){
    return <Navigate to={"/admin/dashboard"} />

  }
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_KEY+"/userOrders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: localStorage.getItem("userId")
      })
    }).then(res => {
      res.json().then(data => {
        setdata(data.orders)
        console.log(data);

      })
    })
  }, [])



  return (
    <>
    <Header/>
    <div style={{ width: "100%" }}>
    
             <div className='prod-head p-5'>
                    <p >Orders</p>
            
                  </div>
                  <div>
                {
                    data.map((order) =>{
                          return  <UserOrderList name={order.name} location={order.location} total={order.total}  products={order.products} quantity={order.quantity}/>
                    })
                }
                </div>
        </div>
        </>
  )
}
