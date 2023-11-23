import React from 'react'
import Table from 'react-bootstrap/Table';

const CowTable = (props) => {

    //we're passing the array of cows in. Can we map it?
    const data = props.data;
    console.log(data)

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
                    </tr>
                </thead>
                <tbody>
                    {
                        //map through data here, outputting to table 
                        data.map((item) => {
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
                                </tr>
                            )
                        })

                    }
                </tbody>
            </Table>
        </div>
    )
}

export default CowTable
