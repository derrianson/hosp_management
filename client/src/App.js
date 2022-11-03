import React, {useState, useEffect} from 'react';
import axios from 'axios';
function App() {
  // const [user, setUser] = useState(false);
  // useEffect(() => {
  //   getUser();
  // }, []);
  // function getUser() {
  //   fetch('http://localhost:3001')
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(data => {
  //       setUser(data);
  //     });
  // }
  // function createUser() {
  //   let name = prompt('Enter user name');
  //   let password = prompt('Enter password');
  //   let isadmin= true
  //   fetch('http://localhost:3001/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({name, password, isadmin}),
  //   })
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(data => {
  //       alert(data);
  //       getUser();
  //     });
  // }
  
  return (
    // <div>
    //   {user ? user : 'There is no merchant data available'}
    //   <br />
    //   <button onClick={createUser}>Add merchant</button>
    //   <br />
    // </div>
    <>
    <div className="auth-form-container">
    <h2>Login</h2>
    <form className="login_form" onSubmit={(e)=>login(e)}>
        <label htmlFor="text">Username</label>
        <input  value ={userName}  type ="text" placeholder="username" id="userName" name ="userName"/>
        <label htmlFor="password">password</label>
        <input value ={password}  type ="password" placeholder="******" id="password" name ="password"  />
                
        <button type="submit">Register</button>
    </form>
           <button onClick={()=>props.onFormSwitch('register')}> Already have an account? Login Here</button>
    </div>

    </>
  );

  function login(e){
    e.preventDefault();
    let request = {
      email : document.getElementById("userName").value,
      password: document.getElementById("password").value
    }
  }
  axios.post('http://localhost:3000/login',request)
  .then(resp => {
    alert(resp.data.message);
  })
  .catch(err =>{
    console.log(err)
  })
}
export default App;
