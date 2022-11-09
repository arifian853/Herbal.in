import React from 'react'
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <div className='login-main'>
        <div className="left-side-login">
            <div className="greeting-login">
                <h1>Welcome Back !</h1>
                <br />
                <img src="../Assets/herb.png" alt="" />
            </div>
        </div>
        <div className="right-side-login">
             <h1>Login</h1>
            <div className="form-login">
                <form action="submit">
                    <label>Email</label><br />
                    <input className='input-column' type="email" name="" id="" placeholder='Enter Email'/><br /> <br />
                    <label>Password</label>
                    <input className='input-column'  type="password" name="" id="" placeholder='Enter Password'/>
                    <br /> <br /> <br />
                    <button className='btn-login-register'>Login</button>
                    <p>Don't have an account ? <Link to="/signup"><span className='green-text-link'><u>Sign Up here</u></span></Link></p>
                </form>
            </div>
        </div>
    </div>
  )
}
