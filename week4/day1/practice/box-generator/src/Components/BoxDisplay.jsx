

const BoxDisplay = ({boxes,deleteBox}) => {
  return (
    <>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px"
        }}>
            {
                boxes.map((box,index)=>(
                  <div key={index} style={{ textAlign: "center" }}>
                    <div
                        style={{
                        backgroundColor: box.color,
                        width: `${box.pixels}px`,
                        height: `${box.pixels}px`,
                        border: "2px solid black",
                        }}
                    >
                    <button onClick={() => deleteBox(index)} >x</button>
                    </div>
                  </div>  
                ))
            }




        </div>
    </>
  )
}

export default BoxDisplay