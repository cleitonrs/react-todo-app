import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import "./Login.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Email de recuperação enviado!");
    } catch (err) {
      setError("Erro ao enviar email. Verifique o endereço.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleReset}>
        <h2>Recuperar Senha</h2>

        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ResetPassword;
