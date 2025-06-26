import {useState} from 'react'

const Form = ({addTask}) => {
    const[input,setInput]=useState("")
    
    const handelSubmit=(e)=>{
        e.preventDefault();
        addTask(input)
        setInput("")

    }
   
  return (
    <div>
         <form onSubmit={handelSubmit}>
            <div>
                <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} style={{fontSize:"40px"}} />
            </div>
            <div>
                 <input type="submit" value="ADD" style={{backgroundColor:"blue" ,color:"white",border:"none",borderRadius:"5px",padding:"15px",marginTop:"10px"}} />     
            </div>
        </form>
    </div>
  )
}

export default Form