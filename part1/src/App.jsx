const Header=({course})=>{
  return(
    <>
     <h1>{course}</h1>
    </>
  )
}
const Content =({parts,exercises})=>{
  
  return(
      <>
        
        <p>{parts[0]} {exercises[0]}</p>
        <p>{parts[1]} {exercises[1]}</p>
        <p>{parts[2]} {exercises[2]}</p>   
        
      </>
    )
}
const Total=({exercises})=>{

  return(
    <>
      <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
    </>
  )
}


  
  
 
  const App = () => {
    const course = 'Half Stack application development'
    const parts =['Fundamentals of React','Using props to pass data','State of a component']
    const exercises=[10,7,14]
  
    return (
      <div>
        <Header course={course} />
        <Content parts={parts} exercises={exercises}/>
        <Total exercises={exercises}/>
      </div>
    )
  }

export default App