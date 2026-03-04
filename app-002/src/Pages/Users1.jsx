
const product =await fetch('https://dummyjson.com/products')
 console.log ('product',product)

 const data = await product.json()
 console.log('data',data)

 const{ products,total}=data;
 import { useState } from "react";

 export default function Users1() {
 const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);  
  
const display = ()=>{
  setProducts(data.products);
      setTotal(data.total);
       setShow(!show);
}


    return (
        <div>
              
            <button onClick={display} className="mb-4 p-2 bg-blue-500 text-white rounded m-3 hover:bg-blue-700 ">click 
                product
            </button>
{show &&(
    <div>
         <h1> Total Product:{total} </h1>
  <div className="flex flex-wrap gap-3 justify-between items-center m-4  ">
        {products.map((product) => (
          <div key={product.id} className="border p-3 w-60 rounded-xl shadow">
            <img src={product.thumbnail} alt={product.title} />
            <h3 className="font-bold">{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
           
            </div>
        </div>
   )}
</div>
    );
}