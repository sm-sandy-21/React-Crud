import axios from "axios";
import React ,{useState}from "react";
import { useHistory } from "react-router";
import "./Addusers.css";

export default function Addusers() {
      const his = useHistory()
  const [user, setuser] = useState({
        name:"",
        email:""
  });
  const onInputeChange = e => {
        setuser({...user,[e.target.name] : e.target.value})
  }
  const SubmitHandler = async e =>{
      e.preventDefault()
     await axios.post("http://localhost:3000/users",user)
     his.push("")
  }
   return (
    <>
      <section>
        <div>
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                  <div>
                    <h2>Add User</h2>
                  </div>
                  <form onSubmit = {e => SubmitHandler(e)}>
                    <input type="hidden" data-form-email="true" />
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={user.name}
                        onChange={ e => onInputeChange(e)}
                        required
                        placeholder="Name*"
                        data-form-field="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={user.email}
                        onChange={ e => onInputeChange(e)}
                        required
                        placeholder="Email*"
                        data-form-field="Email"
                      />
                    </div>
                   
                    <div>
                      <button type="submit" className="btn btn-lg btn-danger">
                        Add User
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
