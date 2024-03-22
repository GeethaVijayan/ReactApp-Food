import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
 



//not using keys is not acceptable 
//whenever we add key 
//if we add new eleement .React will not render whole page using key it will only render the recently added element based on key (unique id)
//mostly for loops we can use index as keys ()
//best thing is to use unique id
//not using keys is not acceptable <<< index as key <<< unique id (best practice)

 
   
//






const AppLayout = () =>{
  return (
      <div className="app">
        <HeaderComponent/>
        <BodyComponent/>
        <div>
            
        </div>
       </div>
  );
};
//header component
root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
