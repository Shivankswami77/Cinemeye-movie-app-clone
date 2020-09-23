import React from "react";
import "./Login.css";

function Login() {
  const redirectUri = "http://localhost:3000/home";
  return (
    <div className="login">
      <img
        src="https://us.123rf.com/450wm/dragomirescu/dragomirescu1810/dragomirescu181001161/110066498-grunge-alphabet-letter-m-logo-design-in-white-red-and-black-colors-suitable-for-a-company-or-busines.jpg?ver=6"
        alt="logo"
      />
      <a href={redirectUri}>LOGIN WITH MOVIEMANIA</a>
    </div>
  );
}

export default Login;
