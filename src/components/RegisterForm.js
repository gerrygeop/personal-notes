import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function RegisterForm({ register }) {
   const [name, handleNameChange] = useInput("");
   const [email, handleEmailChange] = useInput("");
   const [password, handlePasswordChange] = useInput("");

   function onSubmitHandler(event) {
      event.preventDefault();

      register({
         name: name,
         email: email,
         password: password,
      });
   }

   return (
      <form onSubmit={onSubmitHandler} className="flex-col">
         <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={handleNameChange}
         />
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
         <button className="btn btn--primary">Register</button>
      </form>
   );
}

RegisterForm.propTypes = {
   register: PropTypes.func.isRequired,
};

export default RegisterForm;
