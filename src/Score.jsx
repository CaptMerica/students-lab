import Student from "./Student"

const Score = (props) => {
  return (
    <>
    <h2>{props.scores.date}</h2>
    <h3>{props.scores.score}</h3>
    {props.student.score.map(student =>
    <Student student={student} />
      )}
    </>
  )
}

export default Score