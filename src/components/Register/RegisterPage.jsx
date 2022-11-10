import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const RegisterPage = () => {
  return (
    <div className='login-main'>
        <Helmet>
            <title>Herbal.in - Sign Up</title>
        </Helmet>
        <div className="left-side-login">
            <div className="greeting-login">
                <h1>Welcome To Herbal.in !</h1> 
                <br />
                <img src="../Assets/herb.png" alt="" />
            </div>
        </div>
        <div className="right-side-login">
             <h1>Sign Up</h1>
            <div className="form-login">
                <form action="submit">
                    <label>Name</label><br />
                    <input className='input-column' type="text" name="" id="" placeholder='Enter Email'/><br /> <br />
                    <label>Email</label><br />
                    <input className='input-column' type="email" name="" id="" placeholder='Enter Email'/><br /> <br />
                    <label>Password</label>
                    <input className='input-column'  type="password" name="" id="" placeholder='Enter Password'/>
                    <br /> <p>Agree to our <Link to="/terms"><span className='green-text-link'><u>Terms and Service</u></span></Link> <input type="checkbox" name="" id="" /></p>
                    <button className='btn-login-register'>Sign Up</button>
                    <p>Already have an account ? <Link to="/login"><span className='green-text-link'><u>Login here</u></span></Link></p>
                    <p><Link to="/"><span className='green-text-link'><u>Cancel</u></span></Link></p>
                </form>
            </div>
        </div>
    </div>
  )
}
