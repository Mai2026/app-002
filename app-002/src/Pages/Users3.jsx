const recipe=await fetch('https://dummyjson.com/recipes')
const data=await recipe.json()
const {recipes,total}=data;

import { useState } from "react";

export default function Users3(){
    const [recipes,setRecipes]=useState([])
    const [total,setTotal]=useState(0)
const[show,setShow]=useState(0)

    const all=()=>{
setRecipes(data.recipes)
setTotal(data.total)
setShow(!show)
    }
    
    return(
      <div>
      <button onClick={all} className="mb-4 p-2 bg-red-800 text-white rounded m-3 hover:bg-red-700" > Click recipes
      </button>

      {show && (
        <div>
          <h1 className="text-xl font-bold mb-4"> {total} recipes</h1>
          <div className="flex flex-wrap gap-3 justify-between items-center m-4">
            {recipes.map((recipe) => (
              <div  key={recipe.id}  className="border p-3 w-60 rounded-xl shadow hover:shadow-lg ">
               <img  src={recipe.image} className="w-full h-40 object-cover rounded" />
                <h2 className="font-bold mb-2">{recipe.name}</h2>
              
               
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

  