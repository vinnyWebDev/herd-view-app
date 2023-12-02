import React, { useState } from 'react'
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'


const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const auth = getAuth()

    //calls passwors reset function from firebase which sends an email to the given address
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        sendPasswordResetEmail(auth, email).then(() => {
            alert("Password reset email sent.")
        }).catch((error) => {
            //error
            alert(error)
        })


    }

    return (
        <div className='Content'>

            <div className='CredentialsCard'>
                <h1 className='mb-4'>Password Reset</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='mb-3'>Email address</Form.Label>
                        <Form.Control onChange={(e) => { setEmail(e.target.value) }} className='mb-3' type="email" placeholder='Enter email address'></Form.Control>
                        <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
                        <div className='mt-3'>
                            <Link className='LinkText' to="/signin">Back to Sign In</Link>
                        </div>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default ResetPassword
