const cart = await fetch('https://dummyjson.com/carts')
     const data= await cart.json()
     const{carts,total}=data

import { useState } from "react";

export default function Users2(){
    const [carts,setCart]=useState([])
    const[total,setTotal]=useState(0)
    const[show,setShow]=useState(0)

    const handleCart = ()=> {
     setCart(carts)
     setTotal(total)
     setShow(!show)
    }
    
    return(
        <div>
      <button onClick={handleCart} className="mb-4 p-2 bg-gray-500 text-white rounded m-3 hover:bg-gray-700"> Click Carts</button>
        {show&&(
        <div>
        <h1>Carts:{total}</h1>
        <div className="flex flex-wrap gap-3 justify-between items-center m-4 ">
            {carts.map((cart)=>(

                <div Key={cart.id} className="border p-3 w-60 rounded-lg shadow bg-gradient-to-r from-gray-300 to-gray-200 text-gray-800">
                    
                      <h3>Cart ID: {cart.id}</h3>
                <p>Total Price: ${cart.total}</p>
                </div>
            ) )}
        </div>
        </div>
     
        )}
</div>
    );
}


