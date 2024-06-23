 
import React  from "react"
import { useState } from "react"


let Vather = ( )=>{
const [value , setvalue]= useState (0)


return( 
<>

    <h1>slm </h1>

    <button onClick={()=>{setvalue(10)}}>{value}</button>


</>

)

}




export default Vather







