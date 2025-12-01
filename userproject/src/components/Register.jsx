import { useState } from "react"

export default function Register()
{
    const [fromData,setformData]=useState({
        uname:"",uemail:"",upass:"",ucpass:""
    })

    const [errors,setErrors]=useState({});
    const [successMsg,setSuccessMsg]=useState("");

    const handleChange=(e)=>{
        setformData({...FormData,[e.target.value]:e.target.value})
    }

    const validate=()=>{
        let newErrors={};
        if(!FormData.uname) newErrors.uname='Name is required';
        if(!FormData.uemail) newErrors.uemail='Email is required';
        if(!FormData.upass) newErrors.upass='Password is required';
        if(!FormData.ucpass) newErrors.ucpass='Confirm Password is required';
        if(FormData.upass!==FormData.ucpass) newErrors.ucpass='Password And Confirm Password Does Not Match'
        return newErrors;
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const validateErrors=validate();
        setErrors(validateErrors);
        if(Object.keys(validatesErrors).length===0)
        {
            setSuccessMsg("Registration done successfully");
        }
        else
        {
            setSuccessMsg("Registration Failed")
        }
    }

    return(
        <>
        <center>
            <h1>Register Form </h1>
            <form action="">
                <label>Enter Name </label>
                <input type="text" name="uname" />
                <br /><br />
                <label>Enter Email </label>
                <input type="text" name="uemail"/>
                <br /><br />
                <label>Enter Password </label>
                <input type="text" name="upass"/>
                <br /><br />
                <label>Enter Confirm Password </label>
                <input type="text" name="ucpass"/>
                <br /><br />
                <input type="submit" value={"Submit"} />
                <input type="reset" value={"Cancle"} />
            </form>
            </center>
        </>
    )
}