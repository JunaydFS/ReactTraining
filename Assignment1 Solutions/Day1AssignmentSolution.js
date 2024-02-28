import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let Student = { sid: 1, sname: "Junayd", course: "Mechanical Engineering", age: 22, total: 9.34 };

let DocArr =[
{did:1, dname:"Strange", des:"Neurosurgeon",exp:10,num:9003794627},
{did:2, dname:"House", des:"MD",exp:15,num:9378269130},
{did:3, dname:"VVV", des:"GP",exp:12,num:7289852005},
{did:4, dname:"Dexter", des:"MD",exp:9,num:9876540987},
{did:5, dname:"Zabit", des:"Ortho",exp:4,num:8781378602}

];

let finalArr = DocArr.map(
doctor=> {
  return <tr>
  <td>{doctor.did}</td>
  <td>{doctor.dname}</td>
  <td>{doctor.des}</td>
  <td>{doctor.exp}</td>
  <td>{doctor.num}</td>
</tr>
});


  return (
    <>
      <h1>28th February 2024</h1>
      <h2>Assignment 1a </h2>
      <hr />
      <table border="3" width="500">

        <tr>
          <th colspan="2">Student Details</th>
        </tr>
        <tr>
          <td>Student ID</td>
          <td>{Student.sid}</td>
        </tr>
        <tr>
          <td>Student Name</td>
          <td>{Student.sname}</td>
        </tr>
        <tr>
          <td>Course</td>
          <td>{Student.course}</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>{Student.age}</td>
        </tr>
        <tr>
          <td>Total CGPA</td>
          <td>{Student.total}</td>
        </tr>

      </table>

      <hr/>

      <h2>Assignment 1b </h2>
<table border="3" width="600">
  <tr>
    <th>Doctor ID</th>
    <th>Name</th>
    <th>Designation</th>
    <th>Experience</th>
    <th>Contact Number</th>
  </tr>
{finalArr}
</table>


    </>
  );
}

export default App;
