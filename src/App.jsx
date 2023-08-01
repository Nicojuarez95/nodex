import logo from '../src/Img/Logo PW Horizontal Blanco - Proyecto Web.png';
import imgHero from "../src/Img/imgHero.png"
import dominio from "../src/Img/image 5.png"
import responsive from "../src/Img/image 4.png"
import seo from "../src/Img/image 1.png"
import diseño from "../src/Img/image 3.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { useState, useRef } from "react";
import persona1 from "../src/Img/persona1.png"
import persona2 from "../src/Img/persona2.png"
import persona3 from "../src/Img/persona3.png"
import hotel from "../src/Img/hotel.png"
import soluciones from "./Img/solucionesElectricas.png"
import fullfitness from "./Img/fullfitness.png"
import './App.css';
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import node from "./Img/Node.js_logo.svg"
import wppbtn from "../src/Img/descarga-removebg-preview.png"
import vector from "./Img/essential.png"
import figma from "./Img/Figma 1.png"
import visual from "./Img/Visual 1.png"
import html from "./Img/HTML5_logo_and_wordmark.svg-removebg-preview.png"
import css from "./Img/css-removebg-preview.png"
import javascript from "./Img/javascript-removebg-preview.png"
import react from "./Img/React.svg-removebg-preview.png"
import express from "./Img/express-removebg-preview.png"
import mongo from "./Img/mongo-removebg-preview.png"
import git from "./Img/git-removebg-preview.png"

function App() {
  const formInitialDetails = {
    firstName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar consulta');
  const [status, setStatus] = useState({});
  const form = useRef();

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rtegbgd', 'template_sdggipt', form.current, '4hOqTm7TRau9xcy40')
      .then((result) => {
        Swal.fire(
          'Mensaje enviado!',
          'ProyectoWeb pronto se pondra en contacto!',
          'success'
        )
      }, (error) => {
        Swal.fire(
          'Algo salio manl!',
          'Intenta de nuevo mas tarde',
          'error'
        )
      });
  };

  useEffect(() => {
    const swiper = new Swiper('.review-slider', {
      spaceBetween: 10,
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    // Limpia Swiper cuando el componente se desmonta
    return () => {
      swiper.destroy();
    };
  }, []); 

  return (
    <div className="App">
      <a className='btnWpp' href="https://api.whatsapp.com/send?phone=5493584405266&text=Hola! Me contacto por: " target='_blank'> <img src={wppbtn} alt="" /></a>
      <nav className="navbar navbar-expand-lg" id='app-header'>
        <div className="container-fluid">
          <img src={logo} className="App-logo" alt="logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#quienesSomos">Quienes Somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#proyectos">Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#review">Clientes</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section className='section1'>
        <div className='filtro'></div>
        <div className='section1-1'>
          <h3 className='bienvenida'>Bienvenidos a Proyecto Web</h3>
          {/* <img className='imgHero' src={imgHero} alt="" /> */}
          <p className='textHero1'>Diseña y desarrolla tu página web,
            somos expertos creativos!</p>
          <p className='textHero'>Nos dedicamos al mundo tecnológico, trabajamos en desarrollo, diseño web, y gráfica publicitaria.</p>
          <a href="#" className='boton1'>
                  <button className='botonhero3'>Reunión gratuita 
                  <img className='vector' src={vector} alt="" /></button>
                </a>
        </div>

        <div className='section1-2'>
          <form onSubmit={handleSubmit} ref={form}>
            <h2>¿Tenes dudas? Envianos un mensaje:</h2>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ej:José Lopez" name="user_name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Celular</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ej:+54 3584834859" name="user_phone" onChange={(e) => onFormUpdate('phone', e.target.value)}/> 
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Ej:nombre@ejemplo.com" name="user_email" onChange={(e) => onFormUpdate('email', e.target.value)} />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Mensaje/Consulta</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
          </div>
          <div className="col-auto">
              <button id="btn-pixel" type="submit" className="btn btn-primary mb-3"><span>{buttonText} <img className='vector' src={vector} alt="" /></span></button>
          </div>
          {
                      status.message &&
                      <div>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </div>
                    }
                    </form>
        </div>
        
        </section>

        <section className='section2'>

          <div className='section2-1'>
            <div className='ventajas'>
              <img className='dominio' src={dominio} alt="" />
              <div className='contVentajasText'>
                <p className='tituloVentaja'>Dominio gratis + SSL</p>
                <p className='textVent'>Licencia x 1 año y
                  certificado de seguridad</p>
              </div>
            </div>
            <div className='ventajas'>
              <img src={diseño} alt="" />
              <div className='contVentajasText'>
                <p className='tituloVentaja'>Diseño Personalizado</p>
                <p className='textVent'>Impresioná a tus clientes
                  con tu sitio</p>
              </div> 
            </div>
            <div className='ventajas'>
              <img className='seo' src={seo} alt="" />
              <div className='contVentajasText'>
                <p className='tituloVentaja'>Posicionamiento SEO</p>
                <p className='textVent'>Aumentá tu visibilidad y
                  llega a más usuarios</p>
              </div>
            </div>
            <div className='ventajas'>
              <img src={responsive} alt="" />
              <div className='contVentajasText'>
                <p className='tituloVentaja'>Diseño Responsive</p>
                <p className='textVent'>Adaptado a todos los
                  dispositivos</p>
              </div>
            </div>
          </div>
          <div>
          <a href="#" className='boton'>
                  <button className='botonhero2'>Contactarme<img className='vector' src={vector} alt="" /></button>
                </a>
          </div>
          <section className='section3'>
          <div className='quienesSomos' id='quienesSomos'>

                <div className='infoImgQuienesSomos'>
                    <div className="info">
                      <p className='sobreNosotrosTitulo'>Sobre Nosotros</p>
                      <p className='sobreNosotrosTitulo2'>¡Tu experiencia digital comienza ahora!</p>
                      <p className='textNosotros'>¡Somos un equipo apasionado por el diseño UX/UI y desarrolladoro de código, vamos a hacer que cada click sea una experiencia alucinante! Nos dedicamos a crear sitios webs, landing pages, e-commerce y mucho más, y lo hacemos con una obsesión por los detalles y un entusiasmo contagioso en cada paso del proceso. <br /><br />

                        Somos Nicolas Juarez y Bruno Rossetti, dos apasionados de la magia digital.
                        Mientras Nico proviene del mundo de la informático como desarrollador web full stack, Bruno viene de una fusión entre la arquitectura y el diseño gráfico. <br /><br />

                        ¿Quieres impulsar tu negocio hacia el éxito?
                        ¡Nosotros nos encargamos de potenciar tu presencia online!</p>
                    </div>
                    <div className="info2">
                        <img src={persona3} alt="" />
                    </div>
                </div>
          </div>
          <div className="herramientas">
            <p className='bordeGris'></p>
            <p className='herramientasusadas'>Herramientas usadas</p>
            <div className="contHerramientas">
              <div className="herrameinta"><img className='imgHerr' src={figma} alt="" /><p className='nameHerr'>Figma</p></div>
              <div className="herrameinta"><img className='imgHerr' src={visual} alt="" /><p className='nameHerr'>Visual Studio Code</p></div>
              <div className="herrameinta"><img className='imgHerr' src={html} alt="" /><p className='nameHerr'>HTML5</p></div>
              <div className="herrameinta"><img className='imgHerr' src={css} alt="" /><p className='nameHerr'>CSS3</p></div>
              <div className="herrameinta"><img className='imgHerr' src={javascript} alt="" /><p className='nameHerr'>JavaScript</p></div>
              <div className="herrameinta"><img className='imgHerr' src={react} alt="" /><p className='nameHerr'>React JS</p></div>
              <div className="herrameinta"><img className='imgHerr' src={git} alt="" /><p className='nameHerr'>GIT</p></div>
              <div className="herrameinta"><img className='imgHerr' src={express} alt="" /><p className='nameHerr'>Express JS</p></div>
              <div className="herrameinta"><img className='imgHerr' src={node} alt="" /><p className='nameHerr'>Node JS</p></div>
              <div className="herrameinta"><img className='imgHerr' src={mongo} alt="" /><p className='nameHerr'>Mongo DB</p></div>
            </div>
          </div>
          <div className='proyectos' id='proyectos'>
              <h2 className='proyectosTitulo'>Últimos proyectos</h2>
              <div className='proyectosCont'>
                  <div className='itemProyecto'><a href="https://nicojuarez95.github.io/hotel-landing/" target='_blank'><img className='imgProyectos' src={hotel} alt="" /></a></div>

                  <div className='itemProyecto'><a href="https://www.solucioneselectricaslc.com.ar/" target='_blank'><img className='imgProyectos' src={soluciones} alt="" /></a></div>

                  <div className='itemProyecto'><a href="https://www.fullfitnesslc.com.ar/" target='_blank'><img className='imgProyectos' src={fullfitness} alt="" /></a></div>
              </div>
          </div>
        </section>

        <section className="review" id="review">

            <div className="swiper review-slider">
              <div className="swiper-wrapper">
                  <div className="swiper-slide slide">
                    <h2 className="heading">Comentarios de clientes</h2>
                    {/* <i className="fas fa-quote-right"></i> */}
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda eligendi sint dolorum, magni esse suscipit quia ab quos neque repudiandae omnis quo aliquam dolore temporibus libero vel voluptas velit porro!</p>
                    <div className="user">
                        <img src={persona1} alt=""/>
                        <div className="user-info">
                          <h3>nombre de cliente</h3>
                          <div className="stars">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                          </div>
                        </div>
                    </div>
                  </div>

                  <div className="swiper-slide slide">
                    <h2 className="heading">Comentarios de clientes</h2>
                    {/* <i className="fas fa-quote-right"></i> */}
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda eligendi sint dolorum, magni esse suscipit quia ab quos neque repudiandae omnis quo aliquam dolore temporibus libero vel voluptas velit porro!</p>
                    <div className="user">
                        <img src={persona2} alt=""/>
                        <div className="user-info">
                          <h3>nombre de cliente</h3>
                          <div className="stars">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                          </div>
                        </div>
                    </div>
                  </div>

                  <div className="swiper-slide slide">
                    <h2 className="heading">Comentarios de clientes</h2>
                    {/* <i className="fas fa-quote-right"></i> */}
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda eligendi sint dolorum, magni esse suscipit quia ab quos neque repudiandae omnis quo aliquam dolore temporibus libero vel voluptas velit porro!</p>
                    <div className="user">
                        <img src={persona3} alt=""/>
                        <div classname="user-info">
                          <h3>nombre de cliente</h3>
                          <div className="stars">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                          </div>
                        </div>
                    </div>
                  </div>

              </div>
              <div className="swiper-pagination">
              <span class="material-symbols-outlined">
                swipe
                </span>
              </div>

            </div>

          </section>

          <footer>
            <div className='redes'>
                    <a href="https://www.facebook.com/proyectowebb" target='_blank'>
                      <FontAwesomeIcon icon={faFacebookF} style={{ width: '50px', height: '50px' }}/>
                    </a>
                    <a href="https://www.instagram.com/proyecto.webb/" target='_blank'>
                      <FontAwesomeIcon icon={faInstagram} style={{ width: '50px', height: '50px' }}/>
                    </a>
            </div>
            <div className='copi'>
              <p><span>PROYECTO WEB</span> - 2023 Todos los derechos reservados ©</p>
            </div>
          </footer>
        </section>
      </main>
      
    </div>
  );
}

export default App;
