import React from 'react'
import { useState } from 'react'
import axios from "axios";
//use navigate is sued to redirect our users
import { useNavigate, Link } from 'react-router-dom'
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

                //this creates a user in the back end.
                //can we set it up so herd is related with this user
                async function handleSubmit() {
                    console.log(email)
                    let response = await axios.post("http://localhost:3000/users",
                        { email: email },
                        { headers: { Accept: "application/json" } })
                    let data = response.data;
                    console.log(response.data)


                }
                handleSubmit();
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
                <Link to="/signin">Already have an account?</Link>
            </form>
        </div>
    )
}

export default Signup
