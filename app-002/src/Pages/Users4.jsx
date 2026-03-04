 
 const post=await fetch('https://dummyjson.com/posts')
    const data =await post.json()
    const{posts,total}=data

import { useState } from "react";

export default function Users4(){
const[posts,setPosts]=useState([])
const[total,setTotal]=useState(0)
const[show,setShow]=useState(0)

   const addPost=()=>{
    
    setPosts(data.posts)
    setTotal(data.total)
    setShow(!show)
   }

    return(
        <div>
<button onClick={addPost} className="mb-4 p-2 bg-green-800 text-white rounded m-3 hover:bg-green-700">Click Posts</button>
{show&&(
    <div className="flex flex-wrap gap-3 justify-between items-center m-4"> 
    {posts.map ((post) =>(
<div Key={post.id} className="border p-3 w-60 rounded-xl shadow hover:shadow-lg">
<h3 >{post.title}</h3>

<p> 👍 Likes:{post.likes}</p>
<p> views:{post.views}</p>
</div>
    ))}
    </div>
)

}
        </div>
    )
}