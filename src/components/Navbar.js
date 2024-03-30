import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ authenticate, setAuthenticate }) {
  const navigate = useNavigate();
  const menuLists = [
    "여성",
    "남성",
    "신생아/유아",
    "아동",
    "지속가능성",
    "Sale",
  ];

  const [width, setWidth] = useState(0);

  const search = (e) => {
    if (e.key === "Enter") {
      const keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      {/* <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuLists.map((list, i) => (
            <button key={i}>{list}</button>
          ))}
        </div>
      </div> */}

      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>

        <div
          onClick={() => {
            if (authenticate) {
              setAuthenticate(false);
              return;
            }
            navigate("/login");
          }}
        >
          <FontAwesomeIcon icon={faUser} />
          <span style={{ cursor: "pointer" }}>
            {authenticate ? "로그아웃" : "로그인"}
          </span>
        </div>
      </div>

      <div className="nav-logo">
        <Link to="/">
          <img
            width={100}
            src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbY7By1%2FbtqCWLELJ6H%2Fi3EmfldVPdDcMnLiWzzd70%2Fimg.jpg"
            alt="logo"
          />
        </Link>
      </div>

      <div className="nav-menu-area">
        <ul className="menu">
          {menuLists.map((list, i) => (
            <li>
              <a href="#" key={i}>
                {list}
              </a>
            </li>
          ))}
        </ul>

        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" className="" onKeyDown={search} />
        </div>
      </div>
    </div>
  );
}
