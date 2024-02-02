import Formfield from "./from_field";

function Login(){
    return(
    <div>
      <h1>Login page</h1>
        <Formfield label="Email" type="email" placeholder="Enter email"/>
        <Formfield label="Password" type="password" placeholder="Enter Password"/>
        <Formfield type="button" value="Login"/><br/>
        <Formfield/>    
      </div>
    )
  }
  export default Login;