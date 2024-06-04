import React, { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Myprofile = () => {
  const [userData, setUserData] = useState({
    id: '',
    fullname: '',
    email: '',
    no_phone: '',
    role: '',
    img_url: ''
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [profileImage, setProfileImage] = useState('');  

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      setUserData({
        id: decoded.id,
        fullname: decoded.user,
        email: decoded.email,
        no_phone: decoded.no_phone,
        role: decoded.role,
        img_url: decoded.img_url
      });
      setProfileImage(decoded.img_url);
    }
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('profileImage', selectedFile);

    try {
      const res = await axios.post(`/api/users/upload/${userData.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setProfileImage(res.data.img_url);
      alert('Foto profil berhasil diunggah');
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert('Gagal mengunggah foto profil');
    }
  };

  return (
    <div>
      <nav className='navbar-penyewa'>
        <h3>Selamat datang {userData.fullname}</h3>
        <div className='item-navbar'>
          <Link to="/homepenyewa">
            <p>Home</p>
          </Link>
          <Link to="/properties">
            <p>Properties</p>
          </Link>
          <Link to="/booking">
            <p>Booking</p>
          </Link>
          <Link to="/transaksi">
            <p>Transaksi</p>
          </Link>
          <Link to="/myprofile">
            <p>My profil</p>
          </Link>                  
          <img className='fotoprofil' src={profileImage} alt='Profil'/>
        </div>
      </nav>
      <div className='container-profile'>
        <div className='data-profile'>
            <p>
                {profileImage ? <img src={profileImage} alt="Profil" width="100" /> : 'Belum ada foto'}
            </p>
            <p>Update foto profile</p>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Foto Profil</button>
            <p>Fullname : {userData.fullname}</p>
            <p>Email : {userData.email}</p>
            <p>No Phone : {userData.no_phone}</p>
            <p>Role : {userData.role === 1 ? 'Penyewa' : 'Pemilik'} </p>
        </div>
      </div>
    </div>
  );
}

export default Myprofile;
