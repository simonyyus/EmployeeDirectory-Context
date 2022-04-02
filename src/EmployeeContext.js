/*
 *
 *
 * create context API here
 */
import React, { useState, createContext } from "react";
export const EmployeeContext = createContext();

export function EmployeeProvider(props) {
  const [employee, setEmployee] = useState([
    {
      id: 1,
      img: "./images/pic-one.jpg",
      name: "Simon Worku",
      position: "CEO",
      callOffice: "800-000-0000",
      callMobile: "571-000-0000",
      sms: "703-000-0000",
      email: "simon@gmail.com",
    },
    {
      id: 2,
      img: "./images/pic-two.jpg",
      name: "Fiker Workineh",
      position: "HR",
      callOffice: "800-000-0000",
      callMobile: "571-000-0001",
      sms: "703-000-0001",
      email: "fiker@gmail.com",
    },
    {
      id: 3,
      img: "./images/pic-three.jpg",
      name: "Girum Dori",
      position: "Marketing Manager",
      callOffice: "800-000-0000",
      callMobile: "571-000-0002",
      sms: "703-000-0002",
      email: "girum@gmail.com",
    },
    {
      id: 4,
      img: "./images/pic-four.jpg",
      name: "Bethel Tefera",
      position: "QA Manager",
      callOffice: "800-000-0000",
      callMobile: "571-000-0003",
      sms: "703-000-0003",
      email: "bethel@gmail.com",
    },
    {
      id: 5,
      img: "./images/pic-five.jpg",
      name: "Nega T",
      position: "IT Manager",
      callOffice: "800-000-0000",
      callMobile: "571-000-0004",
      sms: "703-000-0004",
      email: "nega@gmail.com",
    },
    {
      id: 6,
      img: "./images/pic-six.jpg",
      name: "Elleni E",
      position: "VP of sales",
      callOffice: "800-000-0000",
      callMobile: "571-000-0005",
      sms: "703-000-0005",
      email: "elleni@gmail.com",
    },
    {
      id: 7,
      img: "./images/pic-seven.jpg",
      name: "Assegid A",
      position: "Finance Manager",
      callOffice: "800-000-0000",
      callMobile: "571-000-0006",
      sms: "703-000-0006",
      email: "asseged@gmail.com",
    },
  ]);

  //   const [SearchedName, setName] = useState("lili");
  //   const getName = (newName) => {
  //     setName(newName);
  //   };

  return (
    <EmployeeContext.Provider value={{ employee }}>
      {props.children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeContext;
