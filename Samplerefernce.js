import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id: "heading"},"heading 🚀 ");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)


//JSX- javascript syntax //->JSX is html like syntax but not html inside javascript

//JSX- browser/JS engine cannot understand the JSX code parcel transpiles this code and reached to browser
//Parcel hands over the responsibility to babel (babel is the one who transpiles the code)

//How babel converts JSX into HTML element 

 //JSX => react.createElement => reactElement(JS object) => HTMLELEMent(render)

 //we are not using React.createElement syntax since it is not developer friendly
 //so we are going for JSX
//const reactheading = <h1 id="heading">heading 🚀 </h1>
//console.log(reactheading,'reactheading')
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(reactheading)

//Two types of Components in react 
//ClassBased Component -oldway of writting code (uses javasriptclasses to create components)
//Functionbased Component -newway of writting code (uses javasriptFunctions to create components)
//reactFunctional Component synat below
var number = 1000;
const TitleComponent = function(){
    return (
        <div>
            {number}
            <h1 >Title Functioona {number}</h1>
        </div>
        
    )
}
// 3 ways to call one component inside another 

// <title/>  
// <title></title>
//<div>
//{title()}
//</div>
  

const ReactFunctionalComponent = () =>(
     <div id="container">
       
        <TitleComponent/>
        <h1 className="heading">Namasate React Functiona</h1>
     </div>
)
    
//reactElement synatx below
const reactFunctionalComponent1 = (<h1 className="heading">Namasate Javascript</h1>)

//rendering component
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<ReactFunctionalComponent/>)
//rendering react element 
//root.render(reactFunctionalComponent1)

/*
  components in sample food app
  Header component
    -logo component
    -navitem component
  Body Component
   -search component
   -RestaurantContainer
     -Restaurantcard
  Footer component
     -Copyright
     -links
     -Address
*/ 