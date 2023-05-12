import { useState } from "react";
import "./Contact.css";

function FormWithMultipleState() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorPseudo, setErrorPseudo] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChangePseudo = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setErrorPseudo(true);
    } else {
      setErrorPseudo(false);
    }
    if (!email) {
      setErrorEmail(true);
    } else {
      setErrorPseudo(false);
    }
    if (!message) {
      setErrorMessage(true);
    } else {
      setErrorPseudo(false);
    }
    if (name && email && message) {
      setIsSubmit(true);
    }
  };

  return (
    <form className="bg-orange-200 rounded-md" onSubmit={handleSubmit}>
      <div className="text">
        <label htmlFor="fullName">
          <p className="mt-8">Name:</p>
          <input
            className={errorPseudo ? "error" : ""}
            id="fullName"
            type="text"
            value={name}
            onChange={handleChangePseudo}
          />
          {errorPseudo && <p className="size">Name is required</p>}
        </label>
        <label htmlFor="email">
          <p>Email:</p>
          <input
            className={errorEmail ? "error" : ""}
            id="email"
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
          {errorEmail && <p className="size">Email is required</p>}
        </label>
        <label htmlFor="message">
          <p>Message:</p>
          <textarea
            className={errorMessage ? "error" : ""}
            id="message"
            value={message}
            onChange={handleChangeMessage}
          />
          {errorMessage && <p className="size">Message is required</p>}
        </label>
        <button id="contactbutton" type="submit">
          Send Message
        </button>

        {isSubmit && (
          <p>
            {name} send a message : {message}
          </p>
        )}
      </div>
    </form>
  );
}
export default FormWithMultipleState;
