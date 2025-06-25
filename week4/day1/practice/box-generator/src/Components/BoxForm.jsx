import {useState} from 'react'

const BoxForm = ({addNewBox}) => {
    const[color,setColor]=useState("")
    const[pixels,setPixels]=useState(100)
    const handelSubbmit=(e)=>{
        e.preventDefault();
        if (!color) return
        addNewBox({
            color,
            pixels:parseInt(pixels)
        })
        setColor("")
        setPixels(100)

    }

  return (
    <div>
        <form onSubmit={handelSubbmit}>
            <label htmlFor="clr">Color:</label>
            <input 
                type="text"
                id='clr' 
                value={color} 
                onChange={ (e) => setColor(e.target.value) }
                style={{ marginRight: "10px" }} 
            />

            <label htmlFor="pxl">Size (pixiles):</label>
            <input 
                type="number"
                id='pxl' 
                value={pixels} 
                onChange={ (e) => setPixels(e.target.value)}
                style={{ marginRight: "10px" }} 
            />  
                <input type="submit" value="ADD" />  
        </form>

    </div>
  )
}

export default BoxForm