import React from 'react'

export default function UserOrderList({name,location,total,products,quantity}) {

    
    return (
        <div className='list m-10 bg-slate-100 p-2 rounded' >

            <p>{name}</p>
            <p>address:{location}</p>
            <p>total:{total}</p>
            <div>
                {
                    products.map((product) => {
                        return <p>prodduct : {product.name}</p>
                    })
                }
            </div>
            <div>
                {
                    quantity.map((quan) => {
                        return <p>quantity : {quan}</p>
                    })
                }
            </div>


        </div>
    )
}
