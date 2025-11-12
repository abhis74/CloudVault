import { useState } from "react";
import "./SharePopup.css"
import { createPortal } from "react-dom";
function SharePopup({link , closePopup}){
    const [inputValue,setInputValue] = useState(link)
    console.log(link,"link")

  const   inputValueHanderler=(e)=>{
    // setInputValue(link)
    }


    return(
    createPortal(
        
        <div className="shareportal">
            <div className="fileLink">
                <input type="text" value={inputValue} onChange={inputValueHanderler} />
                <button> Copy link</button>
            </div>
        </div>
        ,
        document.getElementById("ShareModal")
    )
    )


}

export default SharePopup