import React, { useState } from 'react'
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';


const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const auth = getAuth()

    //calls passwors reset function from firebase which sends an email to the given address
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        sendPasswordResetEmail(auth, email).then(() => {
            alert("Password reset email sent.")
        })


    }

    return (
        <div>
            <h2>Password Reset</h2>
            <form action="">
                <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email'></input>
                <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
        </div>
    )
}

export default ResetPassword
