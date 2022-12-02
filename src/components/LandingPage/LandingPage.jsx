import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const LandingPage = () => {
  return (
    <div>
      <Helmet>
        <title>Herbal.in - Home</title>
      </Helmet>
      <div className="navbar">
        <a href="#Home">Home</a>
        <a href="#Testimoni">Testimoni</a>
        <a href="#Offer">Offer</a>
        <a href="#contact">About Us</a>
      </div>
      <div className="main">
        <div className="left-landing">
          <div className="greeting">
            <img src="../Assets/herb.png" alt="" />
            <h1>Selamat Datang di Herbal.in !</h1>
            <p>Temukan obat - obatan herbal terbaik dari seluruh Indonesia disini</p>
          </div>
        </div>

        <div className="right-landing">
          <br />
          <br />
          <br />
          <Link to="/login">
            <button>Selengkapnya</button>
          </Link>
        </div>
      </div>
      <div className="Testimoni">
        <article>
          <h1 class="box-model1">What Do They Say ?</h1>
          <section class="section-testi">
            <div class="box-testi">
              <p class="quote">
                Being a member of FreeBook undeniably gave me tons of new experience and insights. I have gained many soft skills by participating in webinars or events with useful topics that were informed almost weekly to members. Other
                than that, all competitions with related fields as well as the oil and gas industry were always notified hence members were never outdated and able to contribute to one. Furthermore, materials needed in order to win these
                competitions were also given to each member. Therefore, I could say that being a member of FreeBook undoubtedly benefits me for now and in the future.​
              </p>
              <p class="nama"> - Afif Dwi Ardiansyah</p>
            </div>
            <div class="box-testi">
              <p class="quote">
                Being a member of FreeBook undeniably gave me tons of new experience and insights. I have gained many soft skills by participating in webinars or events with useful topics that were informed almost weekly to members. Other
                than that, all competitions with related fields as well as the oil and gas industry were always notified hence members were never outdated and able to contribute to one. Furthermore, materials needed in order to win these
                competitions were also given to each member. Therefore, I could say that being a member of FreeBook undoubtedly benefits me for now and in the future.​
              </p>
              <p class="nama"> - Budi Santoso</p>
            </div>
            <div class="box-testi">
              <p class="quote">
                Being a member of FreeBook undeniably gave me tons of new experience and insights. I have gained many soft skills by participating in webinars or events with useful topics that were informed almost weekly to members. Other
                than that, all competitions with related fields as well as the oil and gas industry were always notified hence members were never outdated and able to contribute to one. Furthermore, materials needed in order to win these
                competitions were also given to each member. Therefore, I could say that being a member of FreeBook undoubtedly benefits me for now and in the future.​
              </p>
              <p class="nama"> - Ahmad Sanjaya</p>
            </div>
          </section>
        </article>
      </div>
      <div className="Testimoni">
        <h1 class="box-model1">Special For You</h1>
      </div>
      <div className="About"></div>
      <div className="Teams">
        <h1 class="box-model1">Our Teams</h1>
        <section class="kolomprofil">
          <img class="profil" src="../Assets/IMG_20221129_173125.jpg" alt="profile-picture" />
          <div class="kata">
            <p>Arifian Saputra</p>
            <p>
              Halo ! , nama saya Arifian Saputra, panggil saja Arifian, saat ini saya sedang berfokus belajar Front-End dan Back-End Web Development. Saya saat ini berkuliah di jurusan Teknik Informatika di Universitas Maritim Raja Ali
              Haji, Tanjungpinang.
            </p>
            <p>Senang berjumpa dengan anda !</p>
          </div>
          <div class="icon">
            <a href="https://github.com/arifian853">
              <img class="iconx" src="../Assets/github.png" alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/arifian-saputra-08135a178">
              <img class="iconx" src="../Assets/linkedin.png" alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/arifiansaputra_/">
              <img class="iconx" src="../Assets/instagram-logo.png" alt="instagram" />
            </a>
          </div>
        </section>
        <section class="kolomprofil">
          <img class="profil" src="../Assets/Foto_Dhafin Almas Nusantara.jpeg" alt="profile-picture" />
          <div class="kata">
            <p>Dhafin Almas Nusantara</p>
            <p>Hallo! Panggil aja Dhafin. Aku sangat tertarik untuk mempelajari Front-End dan juga mencoba tantangan dalam hal baru, Aku juga sedang kuliah di Institut Teknologi Sepuluh Nopember di Jurusan Teknik Informatika.</p>
            <p>Salam Kenal !!!</p>
          </div>
          <div class="icon">
            <a href="https://github.com/fhinnn">
              <img class="iconx" src="../Assets/github.png" alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/dhafin-almas-nusantara-a0b408223/">
              <img class="iconx" src="../Assets/linkedin.png" alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/dhafin_almas/">
              <img class="iconx" src="../Assets/instagram-logo.png" alt="instagram" />
            </a>
          </div>
        </section>
      </div>
      <div className="footer"></div>
    </div>
  );
};
