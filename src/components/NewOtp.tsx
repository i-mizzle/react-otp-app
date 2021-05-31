import React, { useState } from 'react'
import { IState as Props } from "../App";

interface IProps {
    phone: Props["phone"]
    setPhone: React.Dispatch<React.SetStateAction<Props["phone"]>>
    setResponse: React.Dispatch<React.SetStateAction<Props["response"]>>
}

export const NewOtp: React.FC<IProps> = ({ phone, setPhone, setResponse }) => {
    const [input, setInput] = useState({
        phone: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    // Add Person
    const generateOtp = async () => {
        if (!input.phone) {
            return
        }

        const payload: Object = {
            phoneNumber: input.phone
        }
        const res = await fetch('http://localhost:1337/otp/new', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(payload)
        })
        const data = await res.json()
        setResponse(data.data)
        // setPeople([...people, data]);
        setInput({
            phone: ""
        });
    }
    
    return (
        <div className="AddToList">
            <input type="text" placeholder="Phone number" className="generate-otp-input" value={input.phone} onChange={handleChange} name="phone" />
            <button className="generate-otp-btn" onClick={generateOtp}>
                Generate OTP
            </button>
        </div>
    )
}

export default NewOtp
