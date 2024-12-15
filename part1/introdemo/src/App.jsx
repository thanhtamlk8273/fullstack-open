function Header(props) {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

function Content(props) {
  const ret = props.parts.map(part => <Part name={part.name} exercises={part.exercises} />);
  return (
    <>
      {ret}
    </>
  )
}

function Part(props) {
  return (
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  )
}

function Total(props) {
  return (
    <p>Number of exercises {props.exercises}</p>
  )
}


function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
