import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Discount from './Discount';

export default function AddProductBtn(props) {


    const navigate = useNavigate();

    function handleClick(e){
      e.preventDefault();
      e.stopPropagation();
      props.type == "addproducts" &&  navigate(`/admin/${props.type}`) 
      props.type == "addDiscount" &&  props.setIsOpen(!props.isOpen) 


      }

  return (

        <>
    <button className="add-prod-btn p-2 " onClick={handleClick}>
        {props.content}
    </button>
    </>
  )
}
