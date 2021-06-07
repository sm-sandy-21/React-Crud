import axios from 'axios';
import React ,{useEffect,useState}from 'react'
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

export default function Viewuser() {
      const{id} = useParams()


      const [user, setuser] = useState({
            name:"",
            email:""
      });
      useEffect(() => {
            loadUsers()
            
      }, [])
      const loadUsers = async() =>{
            const result = await axios.get(`http://localhost:3000/users/${id}`)
            setuser(result.data)
         
      }
      return (
            <div>
                  <h1>{user.name}</h1>
                  <h2>{user.email}</h2>
                 <NavLink to="/" className="btn btn-success">Back To Home</NavLink> 
            </div>
      )
}
