import { useState } from 'react'

const Forms = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confPassword: ""
  })
  const [newUser, setNewUser] = useState([]) 
  const [errorNameMsg,setErrorNameMsg]=useState("")
  const [errorLastNameMsg,setErrorLastNameMsg]=useState("")
  const [errorEmailMsg,setErrorEmailMsg]=useState("")
  const [errorPassWordMsg,setErrorPassWordMsg]=useState("")
  const [errorPassMsg,setErrorPassMsg]=useState("")
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const submitHnadler=(e)=>{
    e.preventDefault(); 
       setNewUser([...newUser, formData])
       setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confPassword: ""
                    })
   

    if (formData.firstName.length<3){
        setErrorNameMsg("First name must be more than 3 carachters")
    }else setErrorNameMsg("")
      if (formData.lastName.length<3){
        setErrorLastNameMsg("Last name must be more than 3 carachters")
    }else setErrorLastNameMsg("")
       if (formData.email.length<8){
        setErrorEmailMsg("Email must be more than 8 carachters")
    }else setErrorEmailMsg("")
      if (formData.password.length<8){
        setErrorPassWordMsg("Password must be more than 8 carachters")
    }else setErrorPassWordMsg("")
      if (formData.password !== formData.confPassword){
        setErrorPassMsg("password must be the same")
    }else setErrorPassMsg("")
    setHasBeenSubmitted(true)
  }
     const formMessage = () =>hasBeenSubmitted  ? "Thank you for submitting the form!":"Welcome, please submit the form";    
    
  return (
    <>
        <h1>{formMessage()}</h1>
      
        <form onSubmit={submitHnadler}>
            <div style={{backgroundColor:"rgb(211 211 211)", width:"100%", height:"70px", display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"20px"}}>
            <label htmlFor="frname" style={{fontSize:"20px"}}>First Name:</label>
            <input 
                value={formData.firstName} 
                onChange={handleChange} 
                type="text" 
                id="frname" 
                name="firstName"
                style={{border:"solid 2px black", borderRadius:"10px", width:"80%", height:"50%"}}
            />
            </div>
            <p style={{fontSize:"20px"}}>{errorNameMsg}</p>

            <div style={{backgroundColor:"rgb(211 211 211)", width:"100%", height:"70px", display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"20px"}}>
            <label htmlFor="lastName" style={{fontSize:"20px"}}>Last Name:</label>
            <input 
                value={formData.lastName} 
                onChange={handleChange} 
                type="text" 
                id="lastName" 
                name="lastName"
                style={{border:"solid 2px black", borderRadius:"10px", width:"80%", height:"50%"}}
            />
            </div>
            <p style={{fontSize:"20px"}}>{errorLastNameMsg}</p>

            <div style={{backgroundColor:"rgb(211 211 211)", width:"100%", height:"70px", display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"20px"}}>
            <label htmlFor="email" style={{fontSize:"20px"}}>Email Adress:</label>
            <input 
                value={formData.email} 
                onChange={handleChange} 
                type="email" 
                id="email" 
                name="email"
                style={{border:"solid 2px black", borderRadius:"10px", width:"80%", height:"50%"}}
            />
            </div>
            <p style={{fontSize:"20px"}}>{errorEmailMsg}</p>

            <div style={{backgroundColor:"rgb(211 211 211)", width:"100%", height:"70px", display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"20px"}}>
            <label htmlFor="password" style={{fontSize:"20px"}}>Password:</label>
            <input 
                value={formData.password} 
                onChange={handleChange} 
                type="password" 
                id="password" 
                name="password"
                style={{border:"solid 2px black", borderRadius:"10px", width:"80%", height:"50%"}}
            />
            </div>
            <p style={{fontSize:"20px"}}>{errorPassWordMsg}</p>

            <div style={{backgroundColor:"rgb(211 211 211)", width:"100%", height:"70px", display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"20px"}}>
            <label htmlFor="confPassword" style={{fontSize:"20px"}}>Confirm Password:</label>
            <input 
                value={formData.confPassword} 
                onChange={handleChange} 
                type="password" 
                id="confPassword" 
                name="confPassword"
                style={{border:"solid 2px black", borderRadius:"10px", width:"80%", height:"50%"}}
            />
            </div>
            <p style={{fontSize:"20px"}}>{errorPassMsg}</p>
            <button style={{backgroundColor:"rgb(211 211 211)",width:"120px",height:"60px",border:"none",borderRadius:"5px",fontSize:"20px"}}>Create User</button>

        </form>
        <div style={{marginTop: "20px"}}>
            <h2>Users:</h2>
            <ul>
            {newUser.map((user, index) => (
                <li key={index}>
                {user.firstName} {user.lastName} - {user.email}
                </li>
            ))}
            </ul>
        </div>
    
    </>
  )
}

export default Forms
