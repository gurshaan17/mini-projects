import { useState } from "react"
import { OtpInput } from "./otpInput"

export function PhoneOtpForm(){

const [phoneNumber,setPhoneNumber] = useState("")
const [showOtp,setShowOtp] = useState(false)

function handlePhoneNumber(e){
    setPhoneNumber(e.target.value)
}

function handlePhoneSubmit(e){
    e.preventDefault()
    const regex = /[^0-9]/g
    if(phoneNumber.length<10 || regex.test(phoneNumber)){
        alert("Number is invalid")
        return;
    }
    setShowOtp(true)
}

function onOtpSubmit(otp){
    console.log("Login successful",otp);
}

    return <div>
        {!showOtp ? (<form onSubmit={handlePhoneSubmit}>
            <input type="text" value={phoneNumber} onChange={handlePhoneNumber} placeholder="Enter your phone number"/>
            <br /> <br />
            <button type="submit">Sumbit</button>
        </form>) : <div>
            <span>Generate OTP</span>
            <OtpInput length={6}  onOtpSubmit={onOtpSubmit}/>
            </div>}
    </div>
}

