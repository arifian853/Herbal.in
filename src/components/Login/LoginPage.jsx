import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const LoginPage = () => {
  return (
    <div className='login-main'>
        <Helmet>
            <title>Herbal.in - Login</title>
        </Helmet>
        <div className="left-side-login">
            <div className="greeting-login">
                <h1>Selamat Datang Kembali !</h1>
                <br />
                <img src="../Assets/herb.png" alt="" /> 
            </div>
        </div>
        <div className="right-side-login">
             <h1>Login</h1>
            <div className="form-login">
                <form action="submit">
                    <label>Email</label><br />
                    <input className='input-column' type="email" name="" id="" placeholder='Masukkan Email'/><br /> <br />
                    <label>Kata Sandi</label>
                    <input className='input-column'  type="password" name="" id="" placeholder='Masukkan Kata Sandi '/>
                    <br /> <p> Ingat saya <input type="checkbox" name="" id="" /></p>
                    <button className='btn-login-register'>Login</button>
                    <p>Belum punya akun ? <Link to="/signup"><span className='green-text-link'><u>Daftar disini</u></span></Link></p>
                    <p><Link to="/"><span className='green-text-link'><u>Batal</u></span></Link></p>
                </form>
            </div>
        </div>
    </div>
  )
}
