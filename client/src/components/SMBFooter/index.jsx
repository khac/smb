import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

//INTERNAL IMPORT
import Style from "./Footer.module.css";
import Logo from '../../assets/main-logo-modified.png';
// import { Discover, HelpCenter } from "../NavBar/index";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <img src={Logo} alt="footer logo" height={100} width={100} />
          <p>
              <br />
              Welcome to LocalFinder, your go-to destination for discovering the vibrant tapestry of businesses in your community. 
              <br />
              Our mission is to connect you with the rich diversity of local establishments, from cozy cafes to bustling boutiques, each contributing to the unique character of your neighborhood.
          </p>
          <br />
          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          {/* <Discover /> */}
        </div>

        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          {/* <HelpCenter /> */}
        </div>

        <div className={Style.subscribe}>
          <h3>Subscribe</h3>

          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Enter your email *" />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>
          <div className={Style.subscribe_box_info}>
            <p>
            Discover a local business near you.


            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
