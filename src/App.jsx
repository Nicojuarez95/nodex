import logo from '../src/Img/Logo PW Horizontal Blanco - Proyecto Web.png';
import imgHero from "../src/Img/imgHero.png"
import dominio from "../src/Img/dominio.png"
import responsive from "../src/Img/responsive.png"
import seo from "../src/Img/seo.png"
import diseño from "../src/Img/diseño.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { useState, useRef } from "react";
import persona1 from "../src/Img/persona1.png"
import persona2 from "../src/Img/persona2.png"
import persona3 from "../src/Img/persona3.png"
import './App.css';
import React, { useEffect } from 'react';
import Swiper from 'swiper';

function App() {
  const formInitialDetails = {
    firstName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
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
    // Inicializa Swiper cuando el componente se monta
    const swiper = new Swiper('.review-slider', {
      spaceBetween: 10,
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 5500,
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
      <nav className="navbar navbar-expand-lg" id='app-header'>
        <div className="container-fluid">
          <img src={logo} className="App-logo" alt="logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Quienes Somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">testimonios</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section className='section1'>
        <div className='section1-1'>
          <img className='imgHero' src={imgHero} alt="" />
          <p className='textHero'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio obcaecati debitis at impedit? Placeat nesciunt ullam, labore necessitatibus veniam voluptate odit, harum, inventore architecto dolore obcaecati eum quisquam suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic inventore tenetur laborum molestiae placeat fuga, totam eveniet similique veritatis laboriosam vero dolorem dolores minima nisi nulla quia impedit ipsum autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nemo ad cumque, odio ipsum quasi distinctio aliquam nisi nulla officia adipisci sit quo nam. Voluptates excepturi sunt repudiandae a sapiente.</p>
        </div>

        <div className='section1-2'>
          <form onSubmit={handleSubmit} ref={form}>
            <h2>Dejanos tu consulta</h2>
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
              <button id="btn-pixel" type="submit" className="btn btn-primary mb-3"><span>{buttonText}</span></button>
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
              <p>Tu Dominio Gratis por un año. Al elegir nuestro servicio, obtendrás un dominio sin costo adicional durante todo el primer año.</p>
            </div>
            <div className='ventajas'>
              <img src={diseño} alt="" />
              <p>Impresiona con un Diseño Personalizado. Destaca entre la competencia con una página web única y atractiva que represente la esencia de tu marca.</p>
            </div>
            <div className='ventajas'>
              <img className='seo' src={seo} alt="" />
              <p>Aumenta tu visibilidad con SEO. Nuestro equipo experto en SEO trabajará para posicionar tu sitio web en los primeros resultados de búsqueda.</p>
            </div>
            <div className='ventajas'>
              <img src={responsive} alt="" />
              <p>Nuestros diseños son completamente Responsive para que tus clientes disfruten de tu web en cualquier pantalla.</p>
            </div>
          </div>
          <div>
          <a href="#" className='boton'>
                  <button className='botonhero2'>Reunión gratuita</button>
                </a>
          </div>
          <section className='section3'>
          <div className='quienesSomos'>

          </div>
          <div className='proyectos'>

          </div>
        </section>

        <section className="review" id="review">

            <div className="swiper review-slider">
              <div className="swiper-wrapper">
                  <div className="swiper-slide slide">
                    <h2 className="heading">Comentarios de clientes</h2>
                    <i className="fas fa-quote-right"></i>
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
                    <i className="fas fa-quote-right"></i>
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
                    <i className="fas fa-quote-right"></i>
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
