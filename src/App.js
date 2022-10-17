import React from "react";
import './App.css';
import HelloWorld from "./components/HelloWorld"
import Header from "./components/header"
import EndFooter from "./components/footer"
function App() {
  return  ( 
  <div className="App" >
     <HelloWorld/>
     <Header/>
     <Header/>
     <EndFooter/>
  </div>
  );
 
}
export default App;
