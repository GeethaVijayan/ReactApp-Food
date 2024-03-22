# ReactTraining

#parcel
 -Dev Build
 -Local Server 
 -HMR - Hot Module Replacement
-File Wactching Algorithm -written in c++
-Caching - faster Builds
-Image Optimization
-Minification(bundle all files)
-Bundling
-compress
-consistent Hashing
-code splitting
-Differential bundling - support older browsers
-Diagnostic
-Error handling
-Https
-Tree shaking - remove unused code
-Different Dev and Production Bundles


*APP Structure Idea
//SwiggyAPP
//App
  //-Header
    //-Logo
    //-Navbar
     //-profile
     //About
  //-Body
     //-search
     //-restaurantcards
      //-image
      //-RestaurantName
      //-rating
      //-time for delivery
      //-cuisine
  //-footer

  //Two Types of export/import 

  export default componentName
  import componentName from path

//named import
export const component
import {component} from path

#Hooks
-normal jS functions (comes with some super power and some functions behind the scene )
inside react - when we do npm react (it will imports all the react hooks)
 which we import facebook developers write the code for hooks

2 important stateHook 
 
-useState()  - superPowerful state variables in react
-useEffect() -


usestate -
-> to create state variable
-> It maintains the state of the Component
->
 creation of state varibale 
  const [receivervariable]= Usestate()
  same like :
    let receivervaraible;

    whenever state variable updates/changes  react re-renders the component
    React will make UI layer and data is in sync - so whenever data changes it will updates UI automatically


    Virtual DOM

     Hooks - normal Js variable / every hook has its own function 


    -Reconcilation Algorithm - known as React Fiber

    -useEffect
       It also taKes 2 argumnets
         -1) arrow function callback function
         -2) dependency array

         useEffect(()=<{{}>)

         when this useEffect function is called .
            -when whole page is rendered first after that it will call the callback function which is inside useEffect
            if you have to do somethinhg after rendering the page we can write it inside useEffect