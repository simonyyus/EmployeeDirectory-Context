import React from "react";
import HeaderTwo from "./HeaderTwo";
import EmployeeDetail from "./EmployeeDetail";
// function EmployeePage({employeeList,getName, name}){
//     return(
//         // <div className="empDetail-container">
//         //     <div className="employeepage">
//         //         <HeaderTwo/>
//         //         <EmployeeDetail empDetail={employeeList} getName={getName} name={name}/>
//         //     </div>
           
//         // </div>
//         <div className="empDetail-container">
//             <div className="employeepage">
//                 <HeaderTwo/>
//                 <EmployeeDetail/>
//             </div>
           
//         </div>
//     )

function EmployeePage(){
    return(
        // <div className="empDetail-container">
        //     <div className="employeepage">
        //         <HeaderTwo/>
        //         <EmployeeDetail empDetail={employeeList} getName={getName} name={name}/>
        //     </div>
           
        // </div>
        <div className="empDetail-container">
            <div className="employeepage">
                <HeaderTwo/>
                <EmployeeDetail/>
            </div>
           
        </div>
    )
}
export default EmployeePage;