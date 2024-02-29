import React from 'react';
import './updatedDoctors.css';


function Doctors() {


  let DocArr = [
    { did: 1, dname: "Strange", des: "Neurosurgeon", exp: 10, num: 9003794627, avt: "https://i.pinimg.com/originals/b2/b2/26/b2b2269f188b35506498bf6f64982d07.jpg" },
    { did: 2, dname: "House", des: "MD", exp: 15, num: 9378269130, avt: "https://th.bing.com/th/id/R.39a592be30389f0454277ffce42dcdd8?rik=yk8c%2bIkTzvqEvA&riu=http%3a%2f%2fwww.vnews24.it%2fwp-content%2fuploads%2f2014%2f02%2fDr-House.jpg&ehk=5gvVlv0vwUYXBwpiSJi4uw4f%2fY3rbsixwTZwgB3rk4w%3d&risl=&pid=ImgRaw&r=0" },
    { did: 3, dname: "Ken", des: "Psychiatrist", exp: 12, num: 7289852005, avt:"https://th.bing.com/th/id/R.55e624548eaf99572fdd2904a493bf22?rik=U%2fKN8%2bYMlD7X7g&riu=http%3a%2f%2fstatic.tvmaze.com%2fuploads%2fimages%2fmedium_portrait%2f11%2f27548.jpg&ehk=NFaHktZe5QDPomX5yhdGR5TZI1DqdJSG1j9qEHk53no%3d&risl=&pid=ImgRaw&r=0" },
    { did: 4, dname: "Dexter", des: "Surgeon", exp: 9, num: 9876540987,avt:"https://tse4.mm.bing.net/th/id/OIP.JUKsqymkTPMishoSN13SWAHaHa?rs=1&pid=ImgDetMain" },
    { did: 5, dname: "Zabit", des: "Orthopedist", exp: 4, num: 8781378602,avt:"https://th.bing.com/th/id/R.25450e7015ae338d8fc4b9a3bdcb11bd?rik=c3VC6kXZMIpAtQ&pid=ImgRaw&r=0" }
  ];

  // let finalArr = DocArr.map(
  //   doctor => {
  //     return <tr>
  //       <td>{doctor.did}</td>
  //       <td>{doctor.dname}</td>
  //       <td>{doctor.des}</td>
  //       <td>{doctor.exp}</td>
  //       <td>{doctor.num}</td>
  //     </tr>
  //   });
   
   
   let newArr = DocArr.map((doc,index)=>{
return <div className='card' key={index}>
<img src={doc.avt}/> <br/>
<span>{doc.dname}</span><br/>
<span className='designation'>{doc.des}</span><br/>
<input id='appointButton' type='button' value='Book Appointment'/>


</div>


   });
  return (

    <>
{newArr}

    </>








    // <table border="3" width="600">
    //   <tr>
    //     <th>Doctor ID</th>
    //     <th>Name</th>
    //     <th>Designation</th>
    //     <th>Experience</th>
    //     <th>Contact Number</th>
    //   </tr>
    //   {finalArr}
    // </table>


  
  );
}

export default Doctors;