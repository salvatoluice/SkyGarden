import React, { useState, useEffect } from 'react'
import './header.css'
import { IoMdCall, IoMdPerson } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import { GiShoppingCart } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

const Header = () => {
  const state = useSelector((state) => state.handleCart)
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  
  return (
    <div className='navbar'>
      <div className='top-nav'>
        <div className='nav_left'>
          <p>Customer Care</p>
          <p><IoMdCall /> +254 709 782 000</p>
        </div>
        <div className='nav_right'>
         <Link to='/sell'>
          <p>Sell</p>
         </Link>
          <p>Help & Contact</p>
        </div>
      </div>
      <div className='bottom_nav'>
        <div className='logo'>
          <Link to='/'>
            <img src='https://sky.garden/assets/skylogo_white.png' alt="logo" />
          </Link>
          <button>CATEGORIES</button>
        </div>
        <div className='search'>
          <input type="text" placeholder="Search for products, shops and cateories" /> 
          <button><FiSearch className='search_icon'/></button>
        </div>
        <div className='right'>
          <Link to='/login'>
            <div className='logins'>
              {!user ? <p>Log In</p> : <p className='name'>{name}</p> }
              <IoMdPerson />
            </div>
          </Link>
          <Link to='/cart'>
            <div className='cart'>
              <p>Cart ({state.length})</p>
              <GiShoppingCart />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header