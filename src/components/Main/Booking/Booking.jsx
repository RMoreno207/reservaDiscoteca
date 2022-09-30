import React from "react";

const Booking = () => {
  return (
    <div className="Reserva">
      <div >
        <h1>Reserva</h1>
        <form className="Form_reserva">
          <label className="Ttulo" htmlFor="firstName">Nombre</label>
          {/* Nombre */}
          <input className="input-sin-desplegar"
            id="firstName"
            name="firstName"
            placeholder="Insertar Nombre"
          />
          {/* fecha */}
          <input className="input-sin-desplegar"
            id="date"
            type="date"
            name="date"
            placeholder="Escoger fecha"
          />
          {/* Hora */}
          <input className="input-sin-desplegar"
            id="time"
            type="time"
            name="time"
            placeholder="Hora"
          />
          {/* Zona */}
          <select className="input-sin-desplegar" name="zone" id="zone" placeholder="Zona">
            <option value="zona">Zona</option>
            <option value="vip">VIP</option>
            <option value="palco">Palco</option>
            <option value="terraza">Terraza</option>
            <option value="ZonaA">Zona A</option>
            <option value="ZonaB">Zona B</option>
            <option value="ZonaC">Zona C</option>
          </select>
          {/* Email
<input className="input-sin-desplegar"
             id="email"
            name="email"
            placeholder="usuario@gmail.com"
            type="email"
          />*/}
          <button className="Main-Button-Original" type="submit">Mandar reserva</button>
        </form>
      </div>
    </div>
  )
};


export default Booking;
