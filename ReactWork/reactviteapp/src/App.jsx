import React from 'react'
import Student from './student';

function App() {
  let a=12;
  const mystyle={
    backgroundColor:'red',
    color:'cyan'
  }
  return (
    <div style={{color:'cyan'}}>
    <div style={mystyle}>{a}
      Abes Engineering college
      </div>
    <div style={{backgroundColor:"yellow",color:"red"}}>
    <Student college="Abes Engineering college" name="Nishkarsh" branch="CSE" roll="123" sec="A"/>
    </div>
    </div>
  )
}
export default App