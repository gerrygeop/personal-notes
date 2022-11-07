import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { register } from "../utils/network-data";

function RegisterPage() {
   const navigate = useNavigate();

   async function onRegisterHandler(user) {
      const { error } = await register(user);

      if (!error) {
         navigate("/");
      }
   }

   return (
      <section className="container">
         <RegisterForm register={onRegisterHandler} />
         <p className="textlink">
            Kembali ke <Link to="/">Masuk</Link>
         </p>
      </section>
   );
}

export default RegisterPage;
