import React from 'react'
import { ReactComponent as GoogleLogo } from '../assets/google.svg'

const Auth = () => {
  return (
    <div className="auth">
      <div className="container">
        <div className="form">
          <div className="logo">
            <div className="chatbot" />
          </div>
          <div className="button">
            <div className="google">
              <GoogleLogo />
              <div className="text">Sign in with Google</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
