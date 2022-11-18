import React from "react";
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jugadores } from './Jugadores.jsx';
import { Link, useNavigate } from 'react-router-dom';

export const Home = () => {

  const historial = useNavigate();

  const eliminar = id => {
    const index = Jugadores.map(e => e.id).indexOf(id)

    Jugadores.splice(index, 1)

    historial('/')
  }

  const actualizar = (id, nombre, posicion, goles) => {
    localStorage.setItem('id', id)
    localStorage.setItem('nombre', nombre)
    localStorage.setItem('posicion', posicion)
    localStorage.setItem('goles', goles)
  }

  return (
    <>
      <div style={{margin:'10rem'}}>
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>
                ID
              </th>
              <th>
                NOMBRE
              </th>
              <th>
                POSICION
              </th>
              <th>
                GOLES
              </th>
              <th>
                ACCIONES
              </th>
            </tr>
          </thead>
          <tbody>
            {
              Jugadores && Jugadores.length > 0
                ?
                Jugadores.map((item)=> 
                    <tr key={item.id}>
                      <td>
                        {item.id}
                      </td>
                      <td>
                        {item.nombre}
                      </td>
                      <td>
                        {item.posicion}
                      </td>
                      <td>
                        {item.goles}
                      </td>
                      <td>
                        <Link to={`/editarJugador`}>
                          <Button onClick={() => actualizar(item.id, item.nombre, item.posicion, item.goles)}>EDITAR</Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => eliminar(item.id)}>ELIMINAR</Button>
                      </td>
                    </tr>
                  )
                :
                'No hay datos disponibles'
            }
          </tbody>
        </Table>
        <br />
        <Link className='d-grid gap-2' to='/agregarJugador'>
          <Button size='lg'>AGREGAR JUGADOR</Button>
        </Link>
      </div>
    </>
  )
}