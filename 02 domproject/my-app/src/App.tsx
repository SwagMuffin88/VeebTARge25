import chiikawa_comic from './assets/i-find-it-very-interesting-that-chiikawas-original-premise-v0-iwhfvhfldg1g1.png'
import chiikawa from './assets/AdorableCutieChiikawa.png'
import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={chiikawa} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          <h1>My money don't jiggle jiggle</h1>
          <p>
            Tahaks koju
          </p>
        </div>
        <button
          className="counter"
        >
          The count is a lie
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="center">

          <h2>Documentation</h2>
          <div id="docs">
            <img src={chiikawa_comic} alt=""/>
          </div>
        </div>

      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
