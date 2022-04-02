import React,{useState,useContext} from "react";
import EmployeeContext from "../EmployeeContext";
import SearchedNameContext from "../SearchedNameContext";
// function EmployeeListItem({getName, employeeList})


function EmployeeListItem()
{
    const {employee} = useContext(EmployeeContext);
    const {getName}= useContext(SearchedNameContext);
    const [searchItem, setSearchItem]= useState("");
    const handleSearch=((e)=>{
        setSearchItem(e.target.value);
    })

    const nameToShow=employee.filter((e)=>{
        return e.name.toUpperCase().includes(searchItem.toUpperCase())
    })
    return(
        <div>
        <div className="search">
            <input className="search" type="text" placeholder="search.." onChange={handleSearch}></input>
        </div>
        <div className="container" >
            {nameToShow.map((list)=>{

                return(
                    <div key={list.id} className="employeeList" onClick={() => getName(list.name)}>
                        <div className="img-container">
                            <img src={list.img} alt="pic"/>
                        </div>
                        <div className="nameList">
                            <p>{list.name}</p>
                            <p>{list.position}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
        )
}
export default EmployeeListItem;