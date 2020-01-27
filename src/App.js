import React, { useState, useEffect } from 'react';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log(position)
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>

      </aside>
      <main>
        <ul>
          <li className="dev-items">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/5173633?s=460&v=4" alt="Jorge Toledo" />
              <div className="user-info">
                <strong>Jorge Toledo</strong>
                <span>Ruby, Ruby on Rails, Javascript, NodeJs, ReactJs</span>
              </div>
            </header>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Quem manda na minha terra sou euzis! Diuretics paradis num copo é motivis de denguis.</p>
            <a href="https://xxx.com.br"> Acessar perfil github</a>
          </li>
          <li className="dev-items">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/5173633?s=460&v=4" alt="Jorge Toledo" />
              <div className="user-info">
                <strong>Jorge Toledo</strong>
                <span>Ruby, Ruby on Rails, Javascript, NodeJs, ReactJs</span>
              </div>
            </header>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Quem manda na minha terra sou euzis! Diuretics paradis num copo é motivis de denguis.</p>
            <a href="https://xxx.com.br"> Acessar perfil github</a>
          </li>
          <li className="dev-items">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/5173633?s=460&v=4" alt="Jorge Toledo" />
              <div className="user-info">
                <strong>Jorge Toledo</strong>
                <span>Ruby, Ruby on Rails, Javascript, NodeJs, ReactJs</span>
              </div>
            </header>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Quem manda na minha terra sou euzis! Diuretics paradis num copo é motivis de denguis.</p>
            <a href="https://xxx.com.br"> Acessar perfil github</a>
          </li>
          <li className="dev-items">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/5173633?s=460&v=4" alt="Jorge Toledo" />
              <div className="user-info">
                <strong>Jorge Toledo</strong>
                <span>Ruby, Ruby on Rails, Javascript, NodeJs, ReactJs</span>
              </div>
            </header>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Quem manda na minha terra sou euzis! Diuretics paradis num copo é motivis de denguis.</p>
            <a href="https://xxx.com.br"> Acessar perfil github</a>
          </li>

        </ul>
      </main>
    </div>
  );
}

export default App;
