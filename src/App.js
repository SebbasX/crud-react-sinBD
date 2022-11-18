import './App.css';
import { React } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { AgregarJugador } from './components/AgregarJugador';
import { EditarJugador } from './components/EditarJugador';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agregarJugador' element={<AgregarJugador />} />
          <Route path='/editarJugador' element={<EditarJugador />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
