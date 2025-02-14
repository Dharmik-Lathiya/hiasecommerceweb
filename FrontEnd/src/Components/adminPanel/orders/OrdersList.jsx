import React from 'react'

export default function OrdersList({name,location,total,products,quantity}) {
 let totalQuantity = 0;
  quantity.map((quan) =>{
              totalQuantity+=quan
  })
  return (
<div className='list m-10 bg-slate-100 p-2 rounded' >

        <p>{name}</p>
        <p>address:{location}</p>
        <p>total:{total}</p>
        <div>
        {
              products.map((product) =>{
              return  <p>prodduct : {product.name}</p>
              })
          }
        </div>
        <p>
        totalQuantity {
            totalQuantity
          }
        </p>


      </div>  )
}
