import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const menuLists = ["여성", "남성", "신생아/유아", "아동", "H&M Home", "Slae"];
  return (
    <div>
      <div className="login-button">
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbY7By1%2FbtqCWLELJ6H%2Fi3EmfldVPdDcMnLiWzzd70%2Fimg.jpg"
          alt="logo"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuLists.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
        <div>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" />
        </div>
      </div>
    </div>
  );
}
