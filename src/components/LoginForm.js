import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function LoginForm({ login }) {
   const [email, handleEmailChange] = useInput("");
   const [password, handlePasswordChange] = useInput("");

   function onSubmitHandler(event) {
      event.preventDefault();

      login({
         email: email,
         password: password,
      });
   }

   return (
      <form onSubmit={onSubmitHandler} className="flex-col">
         <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
         />
         <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
         />
         <button className="btn btn--primary">Login</button>
      </form>
   );
}

LoginForm.propTypes = {
   login: PropTypes.func.isRequired,
};

export default LoginForm;
