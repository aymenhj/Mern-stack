

const PersonCard = (props) => {
    const {firstName,lastName,age,hairColor}=props
  return (
    <div>
        <h1>{firstName},{lastName}</h1>
        <p>Age:{age}</p>
        <p>Color Hair:{hairColor}</p>

    </div>
  )
}

export default PersonCard