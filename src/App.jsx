import logo from '../src/Img/favicon.png';
import imgHero from "../src/Img/imgHero.png"
import dominio from "../src/Img/dominio.png"
import responsive from "../src/Img/responsive.png"
import seo from "../src/Img/seo.png"
import diseño from "../src/Img/diseño.png"
import './App.css';

function App() {
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
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nombre</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ej:José Lopez"/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Celular</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ej:3584834859"/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ej:name@example.com"/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Mensaje/Consulta</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-3">Enviar</button>
          </div>
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

          </div>

        </section>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
