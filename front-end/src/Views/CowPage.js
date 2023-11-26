import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios";

const CowPage = () => {

    //Fetch cow data from back end
    const [cows, setCows] = useState([]);
    const params = useParams();
    const cowId = params.cowid;

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await axios.get(`http://localhost:3000/cows/${cowId}`, {
                headers: { Accept: 'application/json' }
            });
            console.log("COWS")
            console.log(response.data)
            setCows(response.data)
        }
        fetchData();
    }, []); // Or [] if effect doesn't need props or state

    return (
        <>
            <div>
                <h1>Cow: {cows.tag}</h1>
                <p>DOB: {cows.dob}</p>
                <p>DAM: {cows.dam}</p>
                <p>Breed: {cows.breed}</p>
                <p>Docility: {cows.docility}</p>
                <p>Aggression: {cows.aggression}</p>
                <p>Fertility {cows.fertility}</p>
                <p>Ease of Calving {cows.calving}</p>
                <p>Calf Quality: {cows.calfquality}</p>
                <p>Milk Production: {cows.milk}</p>
            </div>
            <div>

            </div>
        </>
    )
}

export default CowPage
