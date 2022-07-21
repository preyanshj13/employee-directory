import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewEmp.css';
import EditEmp from './EditEmp';
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


export default function ViewEmp() {
    const [data, setData] = useState([]);
    // axios.get('http://localhost:3000/employee').then(res => setData(res.data))
    useEffect(() => {
        axios
            .get('http://localhost:3000/employee')
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    const confirmDelete = (id) => {
        if(window.confirm(`Are you sure you want to DELETE this user?`) === true) {
            deleteData(id)
            // console.log('you pressed ok')
        }
    }

    const deleteData = (id) => {
        //Logic to delete the item
        axios.delete(`http://localhost:3000/employee/${id}`).then(console.log('deleted item'))
        let newData = [...data].filter((data) => data.id !== id);
        setData(newData);
    }

    const editData = (id) => {
        <EditEmp />
        // axios.put(`http://localhost:3000/employee/${id}`).then(console.log('Item edited'))
    }

    
    // console.log(data.id)

    // setinput([...input, { msg: msg, isCompleted: false}]);
    // console.log(data)
    return (
        <>
        <h2 className='head mb-5'>Employee List</h2>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Employee ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Domain</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>

                {data.map((item) => (
                    <tr key={item.id}>
                        <th scope="row"> {item.id} </th>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.domain}</td>
                        <td>
                            <button className='btnDel' onClick={() => confirmDelete(item.id)}>Delete</button>
                            <button className='btnEdit' onClick={() => editData(item.id)}>Edit</button>
                            </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
        </>
    );
}
