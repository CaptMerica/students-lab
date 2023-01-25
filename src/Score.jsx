import Student from "./Student"

const Score = (props) => {
  return (
    <>
    <h2>Score component</h2>
    {props.student.map(student =>
    <Student />
      )}
    </>
  )
}

export default Score