import React from "react";
import Icon from '../../assets/img/inactive-icon@2x.png';
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footerContainer">
      <footer>
        <div className="flexFooter">
        <div className="footerSegment">
          <a href="/" className="inicioBtn"><img className="buttonImg" src={Icon} alt="" /></a>
          <label htmlFor="">Inicio</label>
        </div>
        <div className="footerSegment">
          <a href="/booking" className="reservasBtn"><img className="buttonImg" src={Icon} alt="" /></a>
          <label htmlFor="">Reservas</label>
        </div>
        <div className="footerSegment">
          <a className="perfilBtn"><img className="buttonImg" src={Icon} alt="" /></a>
          <label htmlFor="">Perfil</label>
        </div>
        </div>
      </footer>
    </div>
   
  )
}

export default Footer;
