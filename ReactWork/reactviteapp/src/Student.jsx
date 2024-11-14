import React from 'react'
import './student.css'
function Student(props) {
  return (
    <div className='idcard'>
        <table border="5" >
            <tbody>
                <tr>
                    <td colspan={2}>{props.college}</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>{props.name}</td>
                </tr>
                <tr><td>roll</td><td>{props.roll}</td></tr>
                <tr><td>Branch</td><td>{props.branch}</td></tr>
                <tr><td>section</td><td>{props.sec}</td></tr>
            </tbody>
        </table>
    </div>
  )
}

export default Student
