import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LoginForm from "../components/LoginForm";
import { login } from "../utils/network-data";

function LoginPage({ loginSuccess }) {
   async function onLogin({ email, password }) {
      const { error, data } = await login({ email, password });

      if (!error) {
         loginSuccess(data);
      }
   }

   return (
      <section className="container">
         <LoginForm login={onLogin} />
         <p className="textlink">
            <Link to="/register">Buat akun baru</Link>
         </p>
      </section>
   );
}

LoginPage.propTypes = {
   loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
