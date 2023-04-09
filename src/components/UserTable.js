import React, { useState, useEffect } from "react";

function UserTable() {
    const[users,setUsers] = useState([]);
    useEffect(()=>{
        const getApiData = async () => {
            const response = await fetch(
              "https://jsonplaceholder.typicode.com/users"
            ).then((response) => response.json()    
            );
            setUsers(response.sort((a,b)=>a.id-b.id));
          
          };
          getApiData();
    },[]);
    
      return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>

                </tr>
            </thead>
            <tbody>
                {users.map(user=>{
                    return(
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>   
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
      )
}

export default UserTable;
