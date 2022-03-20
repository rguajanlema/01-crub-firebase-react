import React from "react";
import signOut from "../functions/cerrarSesion";
import { Container, Stack, Button, Form, Table } from "react-bootstrap";
import getAllProducts from "../functions/getAllProducts";
import eliminarProductoHome from "../functions/eliminarProductoHome";

//modales
import ModalAnadir from "../components/ModalAnadir";
import ModalEditar from "../components/ModalEditar";

function Home({ usuario }) {
  const [productos, setProductos] = React.useState([]);
  const [isModalAnadir, setIsModalAnadir] = React.useState(false);
  const [isModalEditar, setIsModalEditar] = React.useState(false);
  const [productoEditar, setProductoEditar] = React.useState({});

  //llamada de funcion
  function actualizarEstadoProductos() {
    getAllProducts().then((productos) => {
      setProductos(productos);
    });
  }

  function anadirProductoHome() {
    setIsModalAnadir(true);
  }

  React.useEffect(() => {
    actualizarEstadoProductos();
  }, []);

  return (
    <Container fluid>
      <ModalAnadir
        isModalAnadir={isModalAnadir}
        setIsModalAnadir={setIsModalAnadir}
        actualizarEstadoProductos={actualizarEstadoProductos}
      />

      {/**si el producto existe para editar entra en esta condicion */}
      {productoEditar && (
        <ModalEditar
          isModalEditar={isModalEditar}
          setIsModalEditar={setIsModalEditar}
          actualizarEstadoProductos={actualizarEstadoProductos}
          productoEditar={productoEditar}
        />
      )}
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
                  <Button
                    variant="dark"
                    onClick={() => {
                      setProductoEditar(producto);
                      setIsModalEditar(true);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      //una vez borrado se actualiza la informacion
                      eliminarProductoHome(producto).then((confirmacion) => {
                        actualizarEstadoProductos();
                      });
                    }}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Button onClick={anadirProductoHome}>Anadir Producto</Button>
    </Container>
  );
}

export default Home;
