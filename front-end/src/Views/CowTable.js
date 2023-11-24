import React from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import DeleteItem from '../Components/DeleteItem';

const CowTable = (props) => {

    //we're passing the array of cows in.
    const data = props.data;
    //pass in id and only render items which match it?
    const id = props.userId;

    //handle item deletion based on unique ID
    async function deleteItem(e, id) {
        e.preventDefault();
        let response = await axios.delete(`http://localhost:3000/cows/${id}`, { headers: { Accept: "application/json" } })
        window.location.reload();

    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Tag</th>
                        <th>DOB</th>
                        <th>Dam</th>
                        <th>Breed</th>
                        <th>Docility</th>
                        <th>Aggression</th>
                        <th>Fertility</th>
                        <th>Calving</th>
                        <th>Calf Quality</th>
                        <th>Milk</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //map through data here, outputting to table 
                        //id we take in must be made dynamic
                        data.map((item) => {
                            if (item.user_id == id) {
                                return (
                                    <tr>
                                        <td>{item.tag}</td>
                                        <td>{item.dob}</td>
                                        <td>{item.dam}</td>
                                        <td>{item.breed}</td>
                                        <td>{item.docility}</td>
                                        <td>{item.aggression}</td>
                                        <td>{item.fertility}</td>
                                        <td>{item.tag}</td>
                                        <td>{item.calfquality}</td>
                                        <td>{item.milk}</td>
                                        <td><Button>View</Button></td>
                                        {/*Passes item Id to a function which removes it from DB */}
                                        <td><DeleteItem id={item.id}></DeleteItem></td>
                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default CowTable
