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
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio obcaecati debitis at impedit? Placeat nesciunt ullam, labore necessitatibus veniam voluptate odit, harum, inventore architecto dolore obcaecati eum quisquam suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic inventore tenetur laborum molestiae placeat fuga, totam eveniet similique veritatis laboriosam vero dolorem dolores minima nisi nulla quia impedit ipsum autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nemo ad cumque, odio ipsum quasi distinctio aliquam nisi nulla officia adipisci sit quo nam. Voluptates excepturi sunt repudiandae a sapiente.</p>
        </div>

        <div className='section1-2'>
          <form onSubmit={handleSubmit} ref={form}>
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
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ej:name@example.com" name="user_email" onChange={(e) => onFormUpdate('email', e.target.value)} />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Mensaje/Consulta</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
          </div>
          <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-3"><span>{buttonText}</span></button>
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
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, natus laborum architecto quod cumque mollitia delectus tenetur illum quis!</p>
            </div>
            <div className='ventajas'>
              <img src={diseño} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, natus laborum architecto quod cumque mollitia delectus tenetur illum quis!</p>
            </div>
            <div className='ventajas'>
              <img className='seo' src={seo} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, natus laborum architecto quod cumque mollitia delectus tenetur illum quis!</p>
            </div>
            <div className='ventajas'>
              <img src={responsive} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, natus laborum architecto quod cumque mollitia delectus tenetur illum quis!</p>
            </div>
          </div>
          <div className='section2-2'>
            <div className='testimonio'>
              <img className='img-testimonio' src={dominio} alt="" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, mollitia nihil. Quasi, atque ut quaerat amet excepturi rerum veritatis incidunt quidem.</p>
            </div>
            <div className='testimonio'>
              <img className='img-testimonio' src={dominio} alt="" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, mollitia nihil. Quasi, atque ut quaerat amet excepturi rerum veritatis incidunt quidem.</p>
            </div>
            <div className='testimonio'>
              <img className='img-testimonio' src={dominio} alt="" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, mollitia nihil. Quasi, atque ut quaerat amet excepturi rerum veritatis incidunt quidem.</p>
            </div>
          </div>
          
        </section>
      </main>
      <footer>
        <div className='redes'>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} style={{ width: '50px', height: '50px' }}/>
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} style={{ width: '50px', height: '50px' }}/>
                </a>
        </div>
        <div className='copi'>
          <p>PROYECTO WEB- Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
