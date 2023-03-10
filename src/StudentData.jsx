import Student from "./Student"

const StudentData = (props) => {
  return (
    <>
    <h2>This is student list component</h2>
    {props.students.map(student =>
      <Student key={student.name} student={student} />
      )}
    </>
  )
}

export default StudentData