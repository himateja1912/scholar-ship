import { useState } from "react";

const SignUp = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);

  return (
    <div className="signup-container">
      <h2 className="form-title">Create Your Account</h2>

      {/* Sign Up Form */}
      <form action="#" className="signup-form">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            required
          />
          <i className="material-symbols-rounded">person</i>
        </div>

        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Email address"
            className="input-field"
            required
          />
          <i className="material-symbols-rounded">mail</i>
        </div>

        <div className="input-wrapper">
          <input
            type="tel"
            placeholder="Phone number"
            className="input-field"
            required
          />
          <i className="material-symbols-rounded">phone</i>
        </div>

        <div className="input-wrapper">
          <input
            type={isPasswordShown ? "text" : "password"}
            placeholder="Password"
            className="input-field"
            required
          />
          <i className="material-symbols-rounded">lock</i>
          <i
            onClick={() => setIsPasswordShown((prevState) => !prevState)}
            className="material-symbols-rounded eye-icon"
          >
            {isPasswordShown ? "visibility" : "visibility_off"}
          </i>
        </div>

        <div className="input-wrapper">
          <input
            type={isConfirmPasswordShown ? "text" : "password"}
            placeholder="Retype Password"
            className="input-field"
            required
          />
          <i className="material-symbols-rounded">lock</i>
          <i
            onClick={() =>
              setIsConfirmPasswordShown((prevState) => !prevState)
            }
            className="material-symbols-rounded eye-icon"
          >
            {isConfirmPasswordShown ? "visibility" : "visibility_off"}
          </i>
        </div>

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>

      <p className="login-prompt">
         Already have an account? <a href="/login" className="login-link">Log in</a> 
      </p>
    </div>
  );
};

export default SignUp;
