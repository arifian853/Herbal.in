import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useUserAuth } from "../context/UserAuthContext";
import toast, { Toaster } from 'react-hot-toast';

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signupFunc } = useUserAuth();

  const navigateAfter = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
        await signupFunc(email, password);
        navigateAfter('/login');
    }catch (err) {
        setError(err.message);
    }
  }

  useEffect(() => {
    if(error) {
        toast.error(`${error}`, {
            position: "top-right"
        });
    } 
  }, [error])

  return (
   <>
    <div className='login-main'>
        <Helmet>
            <title>Herbal.in - Sign Up</title>
        </Helmet>
        <div className="left-side-login">
            <div className="greeting-login">
                <h1>Selamat Datang di Herbal.in !</h1> 
                <br />
                <img src="../images/leaf.png" alt="" />
            </div>
        </div>
        <div className="right-side-login">
             <h1>Daftar</h1>
            <div className="form-login">
                <form onSubmit={handleSubmit}>
                    <Toaster />
                    <label>Email</label><br />
                    <input className='input-column' type="email" name="" id="" placeholder='Masukkan Email' onChange={(e) => setEmail(e.target.value)}/><br /> <br />
                    <label>Kata Sandi</label>
                    <input className='input-column'  type="password" name="" id="" placeholder='Masukkan Kata Sandi' onChange={(e) => setPassword(e.target.value)}/>
                    <br /> <br />
                    <button className='btn-login-register'>Daftar</button>
                    <p>Sudah memiliki akun ? <Link to="/login"><span className='green-text-link'><u>Login disini</u></span></Link></p>
                    <p><Link to="/"><span className='green-text-link'><u>Batal</u></span></Link></p>
                </form>
            </div>
        </div>
    </div>
   </>
  )
}
