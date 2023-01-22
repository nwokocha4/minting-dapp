import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


const initialState = {
    Name: "",
    email: "",
    message: ""
}
export const ConnectWallet =() => {
    const [formInput, setFormInput] = useState(initialState);

    const {Name, email, message} = formInput;

    const [err, setErr] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!Name && !email && !message) {
            setErr("please enter datails")
        }

        if(Name && email && message) {
            const resp = axios.post("http://")
            setFormInput({Name: "", email: "", message: ""});
            
        }
    }

    const inputChange = (e) => {
        setErr(null);
        let {sup, value} = e.target;
        setFormInput({...formInput, [sup]: value});
    }

    return(
      <div className="contact">
        <div className="contact__container">
            <div className="box__contact">
            <div className="header__container">
                
                <div className="header">Leave a message</div>
            </div>
            <div className="box-container">
            <form >
                <label className="label">Name*</label>
                <br/>
                <input 
                className="border-box" 
                onChange={inputChange} 
                value={Name} 
                type="text" 
                placeholder="Enter your name"></input>
                {err && <div>{err}</div>}
                <label className="label">Email*</label>
                <br/>
                <input 
                className="border-box"              
                onChange={inputChange}  
                value={email} 
                type="email" 
                placeholder="Enter your Email Address"></input>
                {err && <div>{err}</div>}
                <label className="label">Message*</label>
                <br/>
                <textarea
                onChange={inputChange}
                
                className="compose-email"
                value={message}
                type="text"
                placeholder="Enter message"></textarea>
                {err && <div>{err}</div>}
                <br/>
                <br/>
                <div className="btn__container">
                <button type="submit"
                onSubmit={handleSubmit} 
                className="btn__submit">Submit</button>
                </div>
            </form>
            
            </div>
            </div>
        </div>
      </div>
    )
}