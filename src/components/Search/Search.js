import React from "react";



export const Search =({ setSearch ,setActivePage })=>{
   
    const changeHandler = event => {
        setActivePage(1)
        setSearch(event.target.value);
    };
    return (
      <div>
        <input 
        className="form-control w-50 mx-auto mb-5 rounded-pill"
          onChange={changeHandler} 
          type="text" 
          placeholder="Search."
        />
      </div>
    );
}
