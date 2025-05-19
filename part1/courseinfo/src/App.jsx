const Header = ({course}) => {
  // console.log(course)
  return (
    <h1>{course.name}</h1>
  )
};

const Part = ({parts}) => {
  // console.log(props.parts)
  return (
    <p>{parts.name} {parts.exercises}</p>
  )
};

const Content = ({course}) => {
  // console.log(course)
  const parts1 = course.parts[0];
  const parts2 = course.parts[1];
  const parts3 = course.parts[2];
  return (
    <div>
      <Part parts={parts1} />
      <Part parts={parts2} />
      <Part parts={parts3} />
    </div>
  )
};

const Total = ({course}) => {
  let total = course.parts.reduce((acc, elem) => acc + elem.exercises, 0);
  return (
    <p>Number of exercises {total}</p>
  )
};

const App = () => {
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
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

export default App
