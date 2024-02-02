import Formfield from "./from_field";
function Regsiter(){
    return(
<div>
      <h1>Register page</h1>
        <Formfield label="Email" placeholder="Enter email"/><br/>
        <Formfield label="Password" type="password" placeholder="Enter Password"/><br></br>
        <Formfield label="confirm password" type="password" placeholder="Enter confirm password"/><br/>
        <Formfield label="age" type="number" placeholder="Enter age"/><br/>
        <Formfield label="Date of birth" type="date" placeholder="Enter date of birth"/>
        <Formfield type="button" value="Register"/><br/>
      </div>
    )
  }
  export default Regsiter;