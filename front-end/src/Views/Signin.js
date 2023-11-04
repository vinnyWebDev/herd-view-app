import React from 'react'
import { useState } from 'react'
//use navigate is sued tor edirect our users
import { useNavigate } from 'react-router-dom'
//firebase functions
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const Signin = () => {
    //user credentials we're taking in
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // we must instantiate getAuth() if we wish to use firebase's authentication functionalities
    const auth = getAuth();

    const navigate = useNavigate();

    async function handleSignin(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                //success
                console.log(user);
                navigate("/");
            })
            .catch((error) => {
                //error
                console.log(error)
            })

    }

    return (
        <div>
            <h1>Sign In</h1>
            <form action="">
                <input onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Email'></input>
                <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Password'></input>
                <button onClick={(e) => { handleSignin(e) }}>Sign Up</button>
            </form>
        </div>
    )
}

export default Signin
