
import { FaEyeSlash ,FaEye} from "react-icons/fa";
import { useState } from "react";

function App() {
  const [type ,setType]=useState("password")
  const [icon,setIcon]=useState(FaEyeSlash)
  const changeType=()=>{
    // console.log('click');
    if(type === 'password'){
      setType("text")
      setIcon(FaEye)
    }else {
      setType("password")
      setIcon(FaEyeSlash)
    }
  }
  return (
    <div className="wrapper">
      <div className="input-fileds">
      <span onClick={changeType}>
          {icon}
     </span>
    <input type={type}/>
     </div>
  </div>
  );
}

export default App;
