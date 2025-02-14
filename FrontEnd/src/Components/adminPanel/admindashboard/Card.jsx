import React from 'react'

export default function Card(props) {
  return (
    <div className="card ">

                    <p>{props.type}</p>

                    <div className="card-con mt-5">
                        <p className='mr-6'>{props.type == "Total Sales" ? "₹" : " "}{props.data}</p>

                        <div className='card-side-con '>
                            <p>{props.desc}</p>
                        </div>
                    </div>

                </div>
  )
}
