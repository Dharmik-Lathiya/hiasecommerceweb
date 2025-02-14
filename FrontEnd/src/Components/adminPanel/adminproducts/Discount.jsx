import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Discount({id,isOpen,setIsOpen}) {
    
    const [formData,setFormData] = useState({
        _id:id,
        discount: 0
    })
    const navigate = useNavigate()

    function handleChange(e){
            setFormData({...formData,discount:e.target.value})
            console.log(formData);
            
    }
    function handleSubmit(e){
        e.preventDefault();
        fetch(import.meta.env.VITE_API_KEY+"/admin/updateProducts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({"update":formData})
          }).then((res) => {
            res.json().then(data => {
              console.log(data);
              setIsOpen(false)
            })
          }).catch(err => {
            console.log(err);
          })
    }
  return (
   isOpen && <div>

    
    <div id="popup" className="fixed inset-0 flex items-center justify-center bg-opacity-50 ">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <form id="discountForm" className="space-y-4" onSubmit={handleSubmit}>
            <label htmlFor="discount" className="block text-sm font-medium text-gray-700">Enter Discount</label>
            <input type="number" id="discount" name="discount" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300" required onChange={handleChange} value={formData.discount}/>
            <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">Submit</button>
        </form>
            <button id="closePopup" className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700" onClick={()=>setIsOpen(false)}>Close</button>
        </div>
    </div>
    </div>
  )
}
