import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () =>{
    return(
      <div className="header">
            
       <div className="logo-container">
       <img 
       className="logo"
       src={LOGO_URL} alt="FoodChef" />
       </div>
       <div className="title">
         <h1>FOODJOINT</h1>
       </div>
       <div className="nav-items">
       <ul>
           <li >Home</li>
           <li >Profile</li>
           <li >About</li>
           <li >Cart</li>
          </ul>
       </div>       
      </div>
    );
 };


 export default HeaderComponent;