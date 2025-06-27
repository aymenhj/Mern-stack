import { useParams } from "react-router-dom"
 
const NumberWord = () => {
    

   const { wordNbr} = useParams();

  const content = isNaN(+wordNbr)
    ? <h1>The word is: {wordNbr}</h1>
    : <h1>The number is: {wordNbr}</h1>;

  return (
    <div>
      {content}
    </div>
  )
}

export default NumberWord