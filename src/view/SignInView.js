import React, { useState } from "react";

export const SignInView = () => {
  const [loggedInUser, setLoggedInUser] = useState("Hello user");
  // const [loggedInUser, setLoggedInUser] = useState(123);
  // const [loggedInUser, setLoggedInUser] = useState(["array1","array2","array3"]);
  // const [loggedInUser, setLoggedInUser] = useState({name: "Joe"});
  
  // return <h1>This is the Sign In View</h1>;
  return(
    <>
    <h1>{loggedInUser}</h1>
    <button onClick={() => setLoggedInUser("You have clicked the button")}>Update the state value</button>  
    </>
    
  )
};
