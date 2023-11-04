import React from 'react'
import { useState } from 'react'
//use navigate is sued tor edirect our users
import { useNavigate } from 'react-router-dom'
//firebase functions
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const Signup = () => {
    //user credentials we're taking in
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // we must instantiate getAuth() if we wish to use firebase's authentication functionalities
    const auth = getAuth();

    const navigate = useNavigate();


    async function handleSignUp(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                //success
                console.log(user);
                navigate("/signin");

            })
            .catch((error) => {
                //error
                console.log(error)
            })

    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form action="">
                <input onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Email'></input>
                <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Password'></input>
                <button onClick={(e) => { handleSignUp(e) }}>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup
