import logo from '../src/Img/favicon.png';
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
import persona4 from "../src/Img/persona4.png"
import './App.css';

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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <main>
        <section className='section1'>
        <div className='section1-1'>
          <img className='imgHero' src={imgHero} alt="" />
          <p className='textHero'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio obcaecati debitis at impedit? Placeat nesciunt ullam, labore necessitatibus veniam voluptate odit, harum, inventore architecto dolore obcaecati eum quisquam suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic inventore tenetur laborum molestiae placeat fuga, totam eveniet similique veritatis laboriosam vero dolorem dolores minima nisi nulla quia impedit ipsum autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nemo ad cumque, odio ipsum quasi distinctio aliquam nisi nulla officia adipisci sit quo nam. Voluptates excepturi sunt repudiandae a sapiente.</p>
        </div>

        <div className='section1-2'>
          <form onSubmit={handleSubmit} ref={form}>
            <h2>Dejanos tu feedback</h2>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ej:José Lopez" name="user_name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Celular</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ej:3584834859" name="user_phone" onChange={(e) => onFormUpdate('phone', e.target.value)}/> 
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ej:nombre@ejemplo.com" name="user_email" onChange={(e) => onFormUpdate('email', e.target.value)} />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Mensaje/Consulta</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
          </div>
          <div class="col-auto">
              <button id="btn-pixel" type="submit" class="btn btn-primary mb-3"><span>{buttonText}</span></button>
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
          <div className='section2-2'>
            <div className='testimonio'>
              <img className='img-testimonio' src={persona1} alt="" />
              <p>Recomiendo encarecidamente a los chicos para crear sus paginas. El enfoque en el detalle y la comprensión de mis necesidades comerciales fue excepcional. ¡El resultado final superó mis expectativas!</p>
            </div>
            <div className='testimonio'>
              <img className='img-testimonio' src={persona2} alt="" />
              <p>Estoy muy satisfecho con la página que me crearon. Captaron perfectamente mi marca y la experiencia del usuario es increíble. Sinceramente los recomiendo mucho!</p>
            </div>
            <div className='testimonio'>
              <img className='img-testimonio' src={persona3} alt="" />
              <p>Elegir Proyecto Web para mi negocio fue acertado. Profesionalismo, creatividad y excelente comunicación. Los recomiendo a cualquiera que busque calidad en diseño web.</p>
            </div>
            <div className='testimonio' id='testimonio4'>
              <img className='img-testimonio' src={persona4} alt="" />
              <p>Estoy muy feliz con mi página web, le doy las gracias a los chicos de proyecto Web por hacer realidad una meta que tenia, totalmente recomendables!</p>
            </div>
          </div>
          
        </section>
      </main>
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
    </div>
  );
}

export default App;
