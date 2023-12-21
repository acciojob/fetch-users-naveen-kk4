import React,{useState} from "react";
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";
const UsersList = ()=>{
      const [users,setUsers] = useState([]);
      async function updateList(){
          const response = await axios.get("https://reqres.in/api/users");
          setUsers(response.data.data);
        
      }
      return (
        <div>
            <div className="heading">
                <h3>Blue Whales</h3>
                <button type="button" onClick={updateList} className="btn">Get User List</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Email</td>
                            <td>Avatar</td>
                        </tr>
                    </thead>
                    
                <tbody>
                    {
                        users.length>0?(
                            users.map((user)=>(
                                <tr key={user.id}>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td><img src={user.avatar} alt="img"/></td>
                                </tr>
                            ))
                        ):(<tr><td colSpan={4}>No data found to display.</td></tr>)
                    }
                </tbody>
                 
                </table>
            </div>
        
      )
}
export default UsersList;