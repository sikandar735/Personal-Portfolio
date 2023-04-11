// import { useState } from 'react'

import './App.css'
import Header from './layout/Header'
import Banner1 from './components/Banner1'
import About2 from './components/About2'
import Resume3 from './components/Resume3'
import Skill4 from './components/Skill4'
import Feature5 from './components/Feature5'
import WorkStep6 from './components/WorkStep6'
import Work7 from './components/Work7'
// import Testiminails8 from './components/Testiminails8'
import Blog9 from './components/Blog9'
import Contact from './components/Contact'
import Footer from './layout/Footer'
import GetInTuch from './components/GetInTuch'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* page loading */}
      <div id="loading" style={{ display: "none" }}>
        <div className="load-circle">
          <span className="one" />
        </div>
      </div>
      {/* end page loading */}

      <Header />

      <div className='wrapper-right'>
        <main>
          <Banner1 />
          <About2 />
          <Resume3 />
          <Skill4 />
          <Feature5 />
          <WorkStep6 />
          <Work7 />
          <GetInTuch />
          {/* <Testiminails8 /> */}
          <Blog9 />
          <Contact />
        </main>
        <Footer />
      </div>

    </>
  )
}

export default App
