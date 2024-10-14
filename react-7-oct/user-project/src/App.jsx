import { useState } from "react";
import axios from "axios";
function App() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [mobileNo, setMobileNo] = useState("");
  let [password, setPassword] = useState("");
  let [users, setUsers ] = useState([])
  function submitData() {
    firstName = document.getElementById("firstName").value;
    setFirstName(firstName);
    // alert(firstName);
    lastName = document.getElementById("lastName").value;
    // alert(lastName);
    setLastName(lastName);
    email = document.getElementById("email").value;
    setEmail(email);
    // alert(email);
    mobileNo = document.getElementById("mobileNo").value;
    setMobileNo(mobileNo);
    // alert(mobileNo);
    password = document.getElementById("password").value;
    setPassword(password);
    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobileNo: mobileNo,
      password: password
    };
    // alert(password);
    // * axios is using to export the whole ui element at nodeJs backend
    axios({
      url: "http://localhost:3000/add/user",
      method: "post",
      data: data
    })
      .then((data) => {
        console.log(data)
        if (data.data.success) {
          alert("Data is added successfully")
          users = data.data.users
          setUsers(data.data.users)
        }
      }).catch((error) => {
        alert('Something went wrong...')   
        console.error(error)
         });
  }
  return (
    <div>
      <h3>Sign Up</h3>
      <table>
        <tr>
          <td>First Name:</td>
          <td>
            <input type="text" id="firstName" />
          </td>
        </tr>
        <tr>
          <td>Last Name:</td>
          <td>
            <input type="text" id="lastName" />
          </td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>
            <input type="text" id="email" />
          </td>
        </tr>
        <tr>
          <td>Mobile Number:</td>
          <td>
            <input type="text" id="mobileNo" />
          </td>
        </tr>
        <tr>
          <td>Password:</td>
          <td>
            <input type="password" id="password" />
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={submitData}>submit</button>
          </td>
        </tr>
        {users.map((user, i) => (
          <tr key={i}>
            <td>{user.firstName}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
