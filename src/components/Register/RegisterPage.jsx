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
                <h1>Selamat Datang di Herbal.in !</h1> 
                <br />
                <img src="../Assets/herb.png" alt="" />
            </div>
        </div>
        <div className="right-side-login">
             <h1>Daftar</h1>
            <div className="form-login">
                <form action="submit">
                    <label>Nama Lengkap</label><br />
                    <input className='input-column' type="text" name="" id="" placeholder='Masukkan Nama Lengkap'/><br /> <br />
                    <label>Email</label><br />
                    <input className='input-column' type="email" name="" id="" placeholder='Masukkan Email'/><br /> <br />
                    <label>Kata Sandi</label>
                    <input className='input-column'  type="password" name="" id="" placeholder='Masukkan Kata Sandi'/>
                    <br /> <p>Setuju dengan <Link to="/terms"><span className='green-text-link'><u>Syarat dan Ketentuan</u></span></Link> kami <input type="checkbox" name="" id="" /></p>
                    <button className='btn-login-register'>Daftar</button>
                    <p>Sudah memiliki akun ? <Link to="/login"><span className='green-text-link'><u>Login disini</u></span></Link></p>
                    <p><Link to="/"><span className='green-text-link'><u>Batal</u></span></Link></p>
                </form>
            </div>
        </div>
    </div>
  )
}
