import './sass/main.css';
import './sass/modules/_hero.scss';

function App() {
  return (
      <div className="App">
          <main>
              <div className="hero">
                  <div className="hero__wrap">
                      <div>
                          <h1 className="hero__title"><span className="gtp-pink">Grow</span>Topics</h1>
                          <h4 className="hero__subtitle">Coming Soon!</h4>
                      </div>
                      <div className="hero__actions">
                          <a href="http://growtopics.xyz/discord" target="_blank" rel="noreferrer">
                              <button className="hero__button sc-button sc-button--filled">
                                  <span className="sc-button__label">Discord server</span>
                              </button>
                          </a>
                          <a href="https://blog.growtopics.xyz" target="_blank" rel="noreferrer">
                              <button className="hero__button sc-button sc-button--outlined">
                                  <span className="sc-button__label">Visit the blog</span>
                              </button>
                          </a>
                          <a href="https://blog.growtopics.xyz" target="_blank" rel="noreferrer">
                              <button className="hero__button sc-button sc-button--outlined">
                                  <span className="sc-button__label">GrowTopics Status</span>
                              </button>
                          </a>
                      </div>
                  </div>
              </div>
          </main>
      </div>
  );
}

export default App;
