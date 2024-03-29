import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Navbar({ authenticate, setAuthenticate }) {
  const navigate = useNavigate();
  const menuLists = ["여성", "남성", "신생아/유아", "아동", "H&M Home", "Sale"];

  const search = (e) => {
    if (e.key === "Enter") {
      const keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div
        className="login-button"
        onClick={() => {
          if (authenticate) {
            setAuthenticate(false);
            return;
          }
          navigate("/login");
        }}
      >
        <FontAwesomeIcon icon={faUser} />
        <div>{authenticate ? "로그아웃" : "로그인"}</div>
      </div>
      <div
        className="nav-section"
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          width={100}
          src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbY7By1%2FbtqCWLELJ6H%2Fi3EmfldVPdDcMnLiWzzd70%2Fimg.jpg"
          alt="logo"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuLists.map((list, i) => (
            <li key={i}>{list}</li>
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
