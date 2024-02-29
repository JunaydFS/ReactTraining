import { useState } from "react";
function EmpList() {

    const [empArray, setEmpArray] = useState([]);

    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("");


    function getEmpsClick() {
        let data = [
    
            { empno: 1, ename: "Khabib", job: "Fighter", sal: 10000,deptno:250 },
        ];

        setEmpArray(data);

    }
    function addEmpClick()
    {
        let empObj = { };
        empObj.empno = empno; 
        empObj.ename = ename; 
        empObj.job = job; 
        empObj.setSal = sal;
        empObj.setDeptno = deptno;
        

        let tempArray = [...empArray];
        tempArray.push(empObj);       
        setEmpArray( tempArray );

       clearFields();

    }

    function  clearFields()
    {
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");
    }

    function  deleteClick(dno)
    {


        let tempArray = [...empArray];
        
        let  index = tempArray.findIndex( item => item.empno == empno );
        tempArray.splice(index, 1); 

        setEmpArray( tempArray );
    }

    function  selectClick(dno)
    {
      let empObj =   empArray.find(item =>  item.empno ==  empno);
      setEmpno(empObj.empno);
      setEname(empObj.ename);
      setJob(empObj.job);
      setSal(empObj.sal);
      setDeptno(empObj.deptno)
   
    }


    
    function  updateEmpClick()
    {
        let tempArray = [...empArray];

        let index = tempArray.findIndex(item => item.empno == empno);
        tempArray[index].ename = ename ;
        tempArray[index].job = job ;
        tempArray[index].sal = sal ;
        tempArray[index].deptno = deptno ;


        setEmpArray( tempArray );

        clearFields();
    }

    let resultArray = empArray.map(item => {
        return <tr>
            <td>{item.empno}</td>
            <td>{item.ename}</td>
            <td>{item.job}</td>
            <td>{item.sal}</td>
            <td>{item.deptno}</td>
            <td align="center">
                <a href="javascript:void(0);" onClick={() => {selectClick(item.empno)}}>Select</a>|
                <a href="javascript:void(0);" onClick={() => {deleteClick(item.empno)}}>Delete</a>
            </td>
        </tr>;
    });

    return (
        <>
            <h3>Employees!</h3>
            <hr />

            <input placeholder="Employee Number" type="text"
                value={empno} onChange={(e) => setEmpno(e.target.value)} />

            <input placeholder="Employee Name" type="text"
                value={ename} onChange={(e) => setEname(e.target.value)} />

            <input placeholder="Job" type="text"
                value={job} onChange={(e) => setJob(e.target.value)} />

            <input placeholder="Salary" type="text"
                value={sal} onChange={(e) => setSal(e.target.value)} />

            <input placeholder="Department Number" type="text"
                value={deptno} onChange={(e) => setDeptno(e.target.value)} />


            <hr />

            <input type="button" value="Get Employees" onClick={getEmpsClick} />
            <input type="button" value="Add Employees" onClick={addEmpClick} />
            <input type="button" value="Update Employees" onClick={updateEmpClick} />

            <hr />
            <table border="2" width="500">
                <tr>
                    <th>Employee Number</th>
                    <th>Employee Name</th>
                    <th>Job</th>
                    <th>Salary</th>
                    <th>Department Number</th>
                    <th>Actions</th>
                </tr>

                {resultArray}
            </table>
        </>
    );
}

export default EmpList;