import React, { useState } from "react";

export const SignInView = () => {
  const [loggedInUser, setLoggedInUser] = useState("Hello user");
  // const [loggedInUser, setLoggedInUser] = useState(123);
  // const [loggedInUser, setLoggedInUser] = useState(["array1","array2","array3"]);
  // const [loggedInUser, setLoggedInUser] = useState({name: "Joe"});
  const [password, setPassword] = useState();

  // return <h1>This is the Sign In View</h1>;
  return (
    <>
      <h1>Hello {loggedInUser}</h1>
      <p>
        <button onClick={() => setLoggedInUser("You have clicked the button")}>
          Update the state value
        </button>
      </p>
     
      <p>
        <input
          placeholder="Update the state value"
          onChange={(event) => setLoggedInUser(event.target.value)}
        />
      </p>
      <hr />
      <p>
        <span>Username: </span>
        <input
          placeholder="Username"
          onChange={(event) => setLoggedInUser(event.target.value)}
        />
      </p>
      <p>
        <span>Password: </span>
        <input
          placeholder="******"
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
      </p>
      <p><button>Login</button></p>
    </>
  );
};
