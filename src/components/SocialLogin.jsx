import { useState } from "react";

// InputField Component
const InputField = ({ type, placeholder, icon }) => {
  // State to toggle password visibility
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className="input-wrapper">
      <input
        type={isPasswordShown ? 'text' : type}
        placeholder={placeholder}
        className="input-field"
        required
      />
      <i className="material-symbols-rounded">{icon}</i>
      {type === 'password' && (
        <i onClick={() => setIsPasswordShown(prevState => !prevState)} className="material-symbols-rounded eye-icon">
          {isPasswordShown ? 'visibility' : 'visibility_off'}
        </i>
      )}
    </div>
  );
};

// SocialLogin Component
const SocialLogin = () => {
  // Function to handle button clicks for different providers
  const handleLoginClick = (provider) => {
    if (provider === "google") {
      // Open Google login in a new tab
      window.open("https://www.google.com", "_blank");
    } else if (provider === "apple") {
      // Placeholder for Apple login
      alert("Apple login coming soon!");
    }
  };

  return (
    <div className="login-container" >
      <h2 className="form-title">Log in with</h2>

      {/* Social Login Buttons */}
      <div className="social-login">
        <button
          className="social-button"
          onClick={() => handleLoginClick("google")}
        >
          <img src="google.svg" alt="Google" className="social-icon" />
          Google
        </button>

        <button
          className="social-button"
          onClick={() => handleLoginClick("apple")}
        >
          <img src="apple.svg" alt="Apple" className="social-icon" />
          Apple
        </button>
      </div>

      <p className="separator"><span>or</span></p>

      {/* Form for Email and Password login */}
      <form action="#" className="login-form">
        <InputField type="email" placeholder="Email address" icon="mail" />
        <InputField type="password" placeholder="Password" icon="lock" />

        <a href="login" className="forgot-password-link">Forgot password?</a>
        <button type="submit" className="login-button">Log In</button>
      </form>

      {/* Sign-up link */}
      <p className="signup-prompt">
        Don&apos;t have an account?<a href="/signup" className="signup-link">Sign up</a>  
      </p>
    </div>
  );
};

export default SocialLogin;
