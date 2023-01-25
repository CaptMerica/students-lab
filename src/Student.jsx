import Score from "/"

const Student = (props) => {
  return (
    <>
    <h2>{props.student.name}</h2>
    <h3>{props.student.bio}</h3>
    <Score />
    </>
  )
}

export default Student