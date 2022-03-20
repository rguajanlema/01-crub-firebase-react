import React from "react";
import signOut from "../functions/cerrarSesion";
import { Container, Stack, Button, Form, Table } from "react-bootstrap";

function Home({ usuario }) {
  return (
    <Container fluid>
      <Stack direction="horizontal" className="justify-content-between">
        <p style={{ fontSize: 24 }}>Bienvenido,{usuario.email}</p>
        <Button onClick={signOut}>Cerrar sesion</Button>
      </Stack>
      <hr />
      <Form>
        <Stack direction="horizontal">
          <Form.Group controlId="busqueda" className="w-75 m-3">
            <Form.Control type="text" placeholder="Buscar" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Buscar
          </Button>
          <Button variant="light">Resetear</Button>
        </Stack>
      </Form>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>SKU</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Titulo</td>
            <td>$100</td>
            <td>10</td>
            <td>1123BD</td>
            <td>0</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Home;
