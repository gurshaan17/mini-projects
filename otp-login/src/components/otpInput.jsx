import { useState , useRef , useEffect } from "react";

export function OtpInput({length=6,onOtpSubmit=()=>{}}){

const [otp,setOtp] = useState(new Array(length).fill(""))

const inputRefs = useRef([])

function onOtpSubmit(){
    console.log("login successful");
}

useEffect(()=>{
    if(inputRefs.current[0]){
        inputRefs.current[0].focus()
    }
},[])

function handleChange(e,index){
    const value = e.target.value
    if(isNaN(value)){return}
    const newOtp = [...otp]
    newOtp[index]=value.substring(value.length-1)
    setOtp(newOtp)
    const fullOtp = newOtp.join("")
    if(fullOtp.length===6){onOtpSubmit(fullOtp)}
    if(value && index<length-1 && inputRefs.current[index+1]){
        inputRefs.current[index+1].focus()
    }
}

function handleClick(index){
    inputRefs.current[index].setSelectionRange(1,1)
    if(index>0&&!otp[index-1]){
        inputRefs.current[otp.indexOf("")].focus()
    }
}

function handleKeyDown(e,index){
    if(e.key === "Backspace" && !otp[index] && index>0 && inputRefs.current[index-1]){
        inputRefs.current[index-1].focus()
    }
}

function checkOtp(){
    //make some backend calls to verify the otp
}
return <div>
    {otp.map((value,index)=>{
        return <input type="text"
        key={index}
        value={value}
        ref={input=>{inputRefs.current[index]=input}}
        onChange={(e)=>{handleChange(e,index)}}
        onClick={()=>{handleClick(index)}}
        onKeyDown={(e)=>{handleKeyDown(e,index)}}
        style={{width:"40px",height:"40px",textAlign:"center",margin:"5px",fontSize:"1.4rem"}} />
    })}
    <br />
    <button onClick={checkOtp}>Submit</button>
</div>
}