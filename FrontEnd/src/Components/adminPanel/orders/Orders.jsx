import React, { useEffect, useState } from 'react'
import OrdersList from './OrdersList'

export default function Orders() {
    const [data,setdata] = useState([]);
    useEffect(() => {
    
        fetch(import.meta.env.VITE_API_KEY+"/admin/Orders", {
          method: "POST"
        }).then(res => {
          res.json().then(data => {
            setdata(data)
            console.log(data);
    
          })
        })
      }, [])
  return (
    <div style={{ width: "100%" }}>

         <div className='prod-head p-5'>
                <p >Orders</p>
        
              </div>
              <div>
            {
                data.map((order,i) =>{
                      return  <OrdersList key={i} name={order.name} location={order.location} total={order.total}  products={order.Orderdproducts} quantity={order.quantity}/>
                })
            }
            </div>
    </div>
  )
}
