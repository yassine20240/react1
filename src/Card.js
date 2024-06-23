 import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";


let Header = ( ) =>{
 
let [todos , settodos ]= useState([ ]);

let inpv= useRef();

function handletodo (){
let x = inpv.current.value ; 
if(x != " "){
let newItem = {completed:false , x }
 settodos([...todos,  newItem]);

}
else{
  alert('add some thing please ')
}


 inpv.current.value =' ';
}

 let  Remove =(index)=>{
 //we take a copy from the array 
 // let newtodos = [...todos] way1
 //way 2 
let newTodos = todos.slice();

newTodos[index].completed = !newTodos[index].completed ;

settodos(newTodos)

 }

 let Finish =(index) =>{
let newTodos = todos.slice();
newTodos.splice(index,1)
settodos(newTodos)

 }

    return(
<>

<div>

<h3>to do list </h3>

<ul>
{todos.map(( {x ,completed } ,index )=>{ 

  return   (  <div   className="app">     

  <li className={ completed ? 'hello' : ''} key={index} 
  
  onClick={ ()=>Remove (index) }> { x } </li>


 <span  onClick={()=>{Finish (index)}}> ++       </span>

  </div>  )
   
 
  
  }
  
  
  )}

   
</ul>

<input  ref={inpv}  placeholder="enter your item "/><br/>

<button onClick={handletodo}>add </button>

</div>

</>


    )
}
export default Header ; 








