import { useState } from "react";
import './ProfileForm.css'

function ProfileForm () {
    const [inputs, setInputs] = useState("");

  function handleChange(e) {
    const user = e.target.name;
    const password = e.target.value;
    setInputs(values => ({...values, [user]: password}))
    }

  function handleSubmit(e) {
    e.preventDefault();
    const {user, password} = inputs
    alert('UserID: ' +  user + '\n' + 'Password: ' + password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="user-input">UserID:
        <input
          type="text" 
          name="user"
          value={inputs.user}
          onChange={handleChange}
        />
      </label>
      <label className="password-input">
        Password:
        <input
        type="text"
        name="password"
        value={inputs.password}
        onChange={handleChange}
        />
      </label>
      <input className="submit-button" type="submit" value="Submit" />
    </form>
  )
}

export default ProfileForm;