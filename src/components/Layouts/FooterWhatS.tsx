"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterWhatS: React.FC = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">

          <div className="col-lg-12 single-footer">
              <div className="single-footer-widget">

                <p className="single-footer-p">
                  Si quieres que tu organización participe en esta

                  Geografía de la esperanza por la Salud mental comunitaria

                  diligencia el formulario disponible en <a href="">¿Cómo participar?</a>

                  o si quieres aportar como voluntario, escríbenos a: <a href="">forointernacionalnoviolencia@uniquindio.edu.co.</a> 
                </p>
                <br />
                <h3 className="single-footer-p">CONVOCAN</h3>

                  <div className="logo-advertiser">
                    <img src="/images/uniquindio-logo.webp" alt="" />
                    <img src="/images/educar-logo.webp" alt="" />
                    <img src="/images/artofhosting-logo.webp" alt="" />
                  </div>
                    

              </div>
            </div>

            <div className="col-lg-12">
              <div className="copyright-area">
                

                <ul>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contacto</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terminos y condiciones</Link>
                  </li>
                </ul>

                <p>
                  Made by{" "}
                  <a
                    href="https://hibootstrap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HiBootstrap
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterWhatS;
