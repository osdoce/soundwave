import { useState, FormEvent, ChangeEvent } from "react";

import Auth from '../utils/auth';
import { login } from "../api/authAPI";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);
    }
  };

  return (

    
  
    <div className='center form-signin'>
      <form onSubmit={handleSubmit}>
        <img className="mb-4" src="../src/assets/img/dora.png" alt="" width="72" height="57" /> 

        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <div className="form-floating">
          <input
            type='text'
            name='username'
            value={loginData.username || ''}
            onChange={handleChange}
            className='form-control'
            placeholder='usuario'
            id='floatingInput'
          />
          <label htmlFor='floatingInput'>Username</label>
      </div>

        <div className="form-floating">
          <input
            type='password'
            name='password'
            value={loginData.password || ''}
            onChange={handleChange}
            className='form-control'
            id='floatingPassword'
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">Submit Form</button>
      </form>|
    </div>
    
  )
};

export default Login;
