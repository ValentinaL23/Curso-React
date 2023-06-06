import React, { useState } from "react";
import '../componentes/loginForm.css'

function LoginForm() {

  const [popupStyle, showPopup] = useState("hide")

  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
  }

  return (
    <div className="cover">
      <h1>Login</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />

      <div className="login-btn" onClick={popup}>
        Iniciar Sesión
      </div>

      <p className="text">Iniciar Sesión con</p>

      <div className="alt-login">
        <div className="facebook"></div>
        <div className="google"></div>
      </div>

    </div>
  )
}

export default LoginForm