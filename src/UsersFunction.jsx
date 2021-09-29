import React, { useEffect, useState } from "react";
import axios from "axios";

function UsersFunction(){

  const [users,setUsers] = useState([]);

   async function getUsers(){
     const res = await axios.get("https://jsonplaceholder.typicode.com/users");
     setUsers(res.data);


  }

   useEffect(() =>{
     getUsers();
   },[])

  return(
   <>
      {
        users.map((user) =>{
          return <h1 key={user.id}>  {user.name}</h1>
        })
      }
   </>

  );

}

export default UsersFunction;
