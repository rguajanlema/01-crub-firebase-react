import React from "react";
import signOut from "../functions/cerrarSesion";
import { Container, Stack, Button, Form, Table } from "react-bootstrap";
import getAllProducts from "../functions/getAllProducts";

function Home({ usuario }) {
  const [productos, setProductos] = React.useState([]);

  //llamada de funcion
  function actualizarEstadoProductos() {
    getAllProducts().then((productos) => {
      setProductos(productos);
    });
  }

  React.useEffect(() => {
    actualizarEstadoProductos();
  }, []);

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
          {productos &&
            productos.map((producto, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{producto.titulo}</td>
                <td>{producto.precio}</td>
                <td>{producto.cantidad}</td>
                <td>{producto.sku}</td>
                <td>
                  <Button variant="dark">Editar</Button>
                  <Button variant="danger">Eliminar</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Home;
