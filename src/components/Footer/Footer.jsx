import React from "react";
import Icon from '../../assets/img/inactive-icon@2x.png'
const Footer = () => {
  return (
    <div className="footerContainer">
      <footer>
        <div className="flexFooter">
        <div className="footerSegment">
          <button className="inicioBtn"><img className="buttonImg" src={Icon} alt="" /></button>
          <label htmlFor="">Inicio</label>
        </div>
        <div className="footerSegment">
          <button className="reservasBtn"><img className="buttonImg" src={Icon} alt="" /></button>
          <label htmlFor="">Reservas</label>
        </div>
        <div className="footerSegment">
          <button className="perfilBtn"><img className="buttonImg" src={Icon} alt="" /></button>
          <label htmlFor="">Perfil</label>
        </div>
        </div>
      </footer>
    </div>
   
  )
}

export default Footer;
