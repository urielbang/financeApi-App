import { Link } from "react-router-dom";
import { FaBitcoin } from "react-icons/fa";
import { useEffect, useState } from "react";

import { FiUserX, FiUserCheck } from "react-icons/fi";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function NavBar() {
  const [isLogIn, setIsLogIn] = useState(false);
  const [closeUser, setCloseUser] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);

        setIsLogIn(true);
        const uid = user.uid;

        // ...
      } else {
        setIsLogIn(false);
      }
    });

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = () => {
    setCloseUser(!closeUser);
  };
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className={scrolled ? "navBar scrolled" : "navBar"}>
      <FaBitcoin className="iconBit" />
      <ul className="listNavBar navbar-content">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/assest">Assest</Link>
        </li>
        <li>
          <Link to="/auth">Login</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          {!isLogIn ? (
            <div>
              <FiUserX className="noUserIcon" />
            </div>
          ) : (
            <div className="logAutbtn">
              <FiUserCheck className="userLogedIcon" onClick={handleClick} />
              {closeUser ? (
                <Link to={"/"} onClick={handleLogOut}>
                  Log out
                </Link>
              ) : (
                ""
              )}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
