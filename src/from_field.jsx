import './form_field.css';
function Formfield({label,placeholder,type,value}){

    return(
        <>
        <label>{label}</label><br/>
        <input type={type} placeholder={placeholder} value={value}></input><br/>
        </>
    );
}
Formfield.defaultProps={
    type:"text",
    label:"Nothing",
    placeholder:"Donot enter anything",
}
export default Formfield;