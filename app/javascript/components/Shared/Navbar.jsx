import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

export default function Navbar(props) {

    const navigate = useNavigate()

    const {loginStatis} = props.isLogin



    const loginElement = (
      <li className="list-item" onClick={() => navigate('bugs')}>
      <p>All Bugs</p>
    </li>
    )
  
    const  simpleElement = (
      
      <li className="list-item" onClick={() => navigate('login')}>
      <p>Log In</p>
    </li>
    );
  
      return (
        <nav className="navigation">
          <p onClick={()=> navigate('/')} className="brand-name">
            BugZilla
          </p>
          <button className="brandLogo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className="navigation-menu">
            <ul>
            <div className="row">
              {loginStatis == true ? loginElement : simpleElement}
            </div>
  
                
            </ul>
          </div>
        </nav>
      );
    }
  