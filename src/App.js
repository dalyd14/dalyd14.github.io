import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Resume from './components/Resume'

function App() {

  const [menuPressed, setMenuPressed] = useState(false)

  return (
    <section>
      <main>
        <Nav menuPressed={menuPressed} setMenuPressed={setMenuPressed}></Nav>
      </main>
      <Resume menuPressed={menuPressed}></Resume>
    </section>
  );
}

export default App;
