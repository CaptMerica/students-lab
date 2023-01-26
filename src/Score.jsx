import Student from "./Student"

const Score = (props) => {
  console.log(props);
  return (
    <>
    <h2>{props.score.date}</h2>
    <h3>{props.score.score}</h3>
    </>
  )
}

export default Score