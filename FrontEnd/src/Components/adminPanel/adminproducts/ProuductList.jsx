import React, { useState } from 'react'
import AddProductBtn from './AddProductBtn'
import { Link } from 'react-router-dom'
import Discount from './Discount'

export default function ProuductList(props) {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
    <Link to={`/admin/products/${props.id}`}>
      <div className='list m-10 bg-slate-100 p-2 rounded' data-id={props.id}>

        <p>{props.name}</p>
        <p>₹{props.price}</p>
        <p>Sold : {props.sold || 0}</p>
        <p>total income : ${props.price * (props.sold || 0)}</p>

        <AddProductBtn type={"addDiscount"} content={"Add Discount"}  setIsOpen={setIsOpen} isOpen={isOpen}/>
        </div>
    </Link>
        <Discount id={props.id} isOpen={isOpen} setIsOpen={setIsOpen}/>
      </>
  )
}
