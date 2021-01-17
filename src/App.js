import React from "react";
// import { MyFirstComponent } from "./components/myfirstcomponent/MyFirstComponent.js";
import { Routing } from "./routes/Routing";
import { NavigationBar } from "./components/navigationbar/NavigationBar.js";
import "./shared/global/global.css";

function App() {
  return (
    <>
      {/* <MyFirstComponent firstName="Linus" lastName="Schölander" /> */}
      <Routing>
        <NavigationBar />
      </Routing>
    </>
  );
}
export default App;
