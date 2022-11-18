import { React, useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jugadores } from './Jugadores.jsx';
import { useNavigate } from 'react-router-dom';

export const EditarJugador = () => {
  const [id, setId] = useState('')
  const [nombre, setNombre] = useState('')
  const [posicion, setPosicion] = useState('')
  const [goles, setGoles] = useState('')

  const historial = useNavigate()
  const index = Jugadores.map(e => e.id ).indexOf(id)

  const actualizarJ = e => {
    e.preventDefault()

    let a = Jugadores[index]
    a.id = id
    a.nombre = nombre
    a.posicion = posicion
    a.goles = goles

    historial('/')
  }

  useEffect(() => {
    setId(localStorage.getItem('id'))
    setNombre(localStorage.getItem('nombre'))
    setPosicion(localStorage.getItem('posicion'))
    setGoles(localStorage.getItem('goles'))
  }, [])

  return (
    <div>
      <Form className='d-grid gap-2' style={{ margin: '15rem' }}>
      <Form.Group className='mb-3' controlId='formularioId'>
          <Form.Control type='text' placeholder='Digite el Id' value={id} required onChange={(e) => setId(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formularioNombre'>
          <Form.Control type='text' placeholder='Digite el Nombre' value={nombre} required onChange={(e) => setNombre(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formularioPosicion'>
          <Form.Control type='text' placeholder='Digite la Posicion' value={posicion} required onChange={(e) => setPosicion(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formularioGoles'>
          <Form.Control type='text' placeholder='Digite Numero de Goles Marcados' value={goles} required onChange={(e) => setGoles(e.target.value)}></Form.Control>
        </Form.Group>
        <Button onClick={actualizarJ} type='submit'>ACTUALIZAR</Button>
      </Form>
    </div>
  )
}