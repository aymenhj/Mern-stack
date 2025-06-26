

const Display = ({tasks,deleteTask,toggleCompleted}) => {
  return (
    <div>
        {tasks.map((task, index) => (
        <div key={index} style={{ margin: "10px 0" }}>
         
          <span style={{
            marginLeft: "10px",
            textDecoration: task.completed ? "line-through" : "none",
            fontSize:"35px"
          }}>
            {task.text}
          </span>
           <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCompleted(index)}
          />
          <button onClick={() => deleteTask(index)} style={{ marginLeft: "10px",
            backgroundColor:"black",
            color:"white",
            padding:"15px",
            border:"none",
            borderRadius:"5px" 
          }}>
            Delete
          </button>
        </div>
      ))}
      
    </div>
  )
}

export default Display