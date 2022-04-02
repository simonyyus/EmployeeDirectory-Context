import React from "react";
import HomePage from "./HomePage";
import EmployeePage from"./EmployeePage";
import { NameProvider } from "../SearchedNameContext";
import  "./Style.css";

// function Wrapper({getName, employeeList, name}){
       
//     return(
//     <div className="wrapper">
//         <HomePage employeeList={employeeList} getName={getName}/>
//         <EmployeePage employeeList={employeeList} getName={getName} name={name}/>
//     </div>
//     )

/* using context API method below here
*
*/
function Wrapper(){
       
    return(
    <div className="wrapper">
        
        <NameProvider>
            <HomePage />
            <EmployeePage/>
        </NameProvider>
    </div>
    )
};
export default Wrapper;