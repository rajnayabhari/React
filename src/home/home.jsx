import { useState } from 'react';
import './home.css'
function Home() {
    const [count, setCount] = useState(0);
    const [even, checkeven] = useState(false);
    return (
        <>
            <h1>Homepage</h1>
            <h4>counter value <span>{count}</span></h4>
            <p>Even:{even}</p>
            {/* <div id='button'>
                <button onClick={() => setCount(count + 1)}>Increment</button>

            </div> */}
            <CustomButton title="increment" func={()=>setCount(count+1)}>
            </CustomButton>
            {/* <div id='button'>
                <button onClick={() => checkeven("true")}>check even</button>

            </div> */}
             <CustomButton title="Checkeven" func={()=>{
                if (count%2 === 0)
                {checkeven("true")}
                else{
                    checkeven("false")
                }}
                }>
            </CustomButton>
        </>
    );
}
export default Home;

function CustomButton({title,func}){
    return(
        <div id="button">
            <button onClick={func}>{title}</button>
        </div>
    );
}