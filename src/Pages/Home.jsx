import axios from 'axios';
import React from 'react'
import {useState,useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./Home.css"

export default function Home() {
      const [users, setusers] = useState([]);

      useEffect(() => {
            loadUsers()
            
      }, [])

      const loadUsers = async() =>{
            const result = await axios.get("http://localhost:3000/users")
            setusers(result.data.reverse())
      }
      const deleteUser = async id =>{
            await axios.delete(`http://localhost:3000/users/${id}`)
            loadUsers()
      }

      return (
            <div>
            <NavLink to="/user/add" className="btn btn-primary">Add User</NavLink>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                  {
                        users.map((user,index) => (
                              
                        <tr key={user.id}>                     
                              <th scope="row">{index + 1}</th>
                              <td >{user.name}</td>
                              <td>{user.email}</td>
                              <td>
                              <NavLink to={`/user/edit/${user.id}`} className="btn btn-success" >Edit</NavLink>
                              <NavLink to={`/user/view/${user.id}`} className="btn btn-info">Info</NavLink>
                              <button onClick = {() => deleteUser(user.id)} className="btn btn-danger">Delete</button>
                              </td>
                        </tr> 
                        ))
                  }
               
              </tbody>
            </table>
          </div>
      )
}

