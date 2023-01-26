import Score from "./Score"

const Student = (props) => {
  return (
    <div>
    <h2>{props.student.name}</h2>
    <h3>{props.student.bio}</h3>
    <Score scores={scores} date={date}/>
    </div>
  )
}

export default Student