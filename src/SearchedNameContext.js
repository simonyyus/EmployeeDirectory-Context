/*
 *
 *
 * create context API here
 */
import React, { useState, createContext } from "react";
export const SearchedNameContext = createContext();

export function NameProvider(props) {
  const [SearchedName, setName] = useState("simon");
  const getName = (newName) => {
    setName(newName);
  };

  return (
    <SearchedNameContext.Provider value={{ SearchedName, getName }}>
      {props.children}
    </SearchedNameContext.Provider>
  );
}

export default SearchedNameContext;
