import React, { useState } from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({ createOrder }) => {
  const [nameAndSurname, setNameAndSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);

  return (
    <div className="formContainer">
      <form className="Form">
        <div className="mb-3">
          <label class="form-label textForm">·Nombre y Apellido·</label>
          <input type="text" className="form-control" required onChange={(ev) => setNameAndSurname(ev.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label textForm">·Email·</label>
          <input type="email" className="form-control" required onChange={(ev) => setEmail(ev.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label textForm">·Teléfono·</label>
          <input
            type="number"
            className="form-control input"
            min={0}
            required
            onChange={(ev) => setPhone(ev.target.value)}
          />
        </div>
        <button
          onClick={(event) => createOrder({
            nameAndSurname,
            email,
            phone
          }, event)}
          type="submit"
          className="btn comprar"
          disabled={!nameAndSurname || !phone || (!email || !email.includes('@'))}
        >
          COMPRAR
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
