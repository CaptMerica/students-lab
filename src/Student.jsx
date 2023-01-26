import Score from "./Score"

const Student = (props) => {
  return (
    <div>
    <h2>{props.student.name}</h2>
    <h3>{props.student.bio}</h3>
    {props.student.scores.map((score, idx) =>
    <Score score={score} key={idx}/>
    )}
    </div>
  )
}

export default Student