import React,{useContext} from "react";
import EmployeeContext from "../EmployeeContext";
import SearchedNameContext from "../SearchedNameContext";
function EmployeeDetail()
{
    const { employee } = useContext(EmployeeContext);
    const {SearchedName } = useContext(SearchedNameContext);
    return(
        <div className="container">
            {employee
            .filter(item=> item.name===SearchedName)
            .map((list)=>{
                return(
                    <div key={list.id} className="empDetail-container">
                        <div className="employeeList">
                        <div className="img-container">
                            <img src={list.img} alt="pic"/>
                        </div>
                        <div className="nameList">
                            <p>{list.name}</p>
                            <p>{list.position}</p>
                        </div>
                    </div>
                        <div className="more-detail">
                            <div className="callOffice">
                                <p><span style={{fontWeight:"bold"}}>Call Office</span></p>
                                <p>{list.callOffice}</p>
                            </div>
                             <div className="callMobile">
                                <p><span style={{fontWeight:"bold"}}>Mobile</span></p>
                                <p>{list.callMobile}</p>
                            </div>
                            <div className="sms">
                                <p><span style={{fontWeight:"bold"}}>SMS</span></p>
                                <p>{list.sms}</p>
                            </div>
                            <div className="email">
                                <p><span style={{fontWeight:"bold"}}>Email</span></p>
                                <p>{list.email}</p>
                            </div>
                        </div>
                    </div>
                )
                })}
        </div>
        )
}
export default EmployeeDetail;