import { React, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jugadores } from './Jugadores.jsx';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

export const AgregarJugador = () => {
  const [nombre, setNombre] = useState('')
  const [posicion, setPosicion] = useState('')
  const [goles, setGoles] = useState('')

  const historial = useNavigate()

  const agregarJ = e => {
    e.preventDefault()

    const ids = uuid()
    let uniqueId = ids.slice(0, 3)

    let a = nombre, b = posicion, c = goles;

    Jugadores.push({ id: uniqueId, nombre: a, posicion: b, goles: c })

    historial('/')
  }

  return (
    <div>
      <Form className='d-grid gap-2' style={{ margin: '15rem' }}>
        <Form.Group className='mb-3' controlId='formularioNombre'>
          <Form.Control type='text' placeholder='Digite el Nombre' required onChange={(e) => setNombre(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formularioPosicion'>
          <Form.Control type='text' placeholder='Digite la Posicion' required onChange={(e) => setPosicion(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formularioGoles'>
          <Form.Control type='text' placeholder='Digite Numero de Goles Marcados' required onChange={(e) => setGoles(e.target.value)}></Form.Control>
        </Form.Group>
        <Button onClick={agregarJ} type='submit'>AGREGAR</Button>
      </Form>
    </div>
  )
}