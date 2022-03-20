import React from "react";
import { Modal, Stack, Button, Form } from "react-bootstrap";
import anadirProducto from "../functions/anadirProducto";

function ModalEditar({
  isModalEditar,
  setIsModalEditar,
  actualizarEstadoProductos,
  productoEditar,
  setProductoEditar,
}) {
  function editarProductoModal() {
    //obtener infor del formulario
    const titulo = document.getElementById("titulo").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;
    const sku = document.getElementById("sku").value;

    //enviar la informacion a firebase
    const infoProducto = { titulo, precio, cantidad, sku };
    anadirProducto(infoProducto);
    //cerrar modal
    //regresar estado a {false}
    setProductoEditar(null);
    actualizarEstadoProductos();
    setIsModalEditar(false);
  }

  const [productoEstado, setProductoEstado] = React.useState({
    ...productoEditar,
  });

  return (
    <Modal
      show={isModalEditar}
      onHide={() => {
        setIsModalEditar(false);
        setProductoEditar(null);
      }}
    >
      <Modal.Header>
        <Modal.Title>Editar producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Control
              id="titulo"
              placeholder="titulo"
              type="text"
              className="mb-1"
              value={productoEstado?.titulo}
              onChange={(event) =>
                setProductoEstado({
                  ...productoEstado,
                  titulo: event.target.value,
                })
              }
            />
            <Form.Control
              id="precio"
              placeholder="precio"
              type="number"
              className="mb-1"
              value={productoEstado?.precio}
              onChange={(event) =>
                setProductoEstado({
                  ...productoEstado,
                  precio: event.target.value,
                })
              }
            />
            <Form.Control
              id="cantidad"
              placeholder="cantidad"
              type="number"
              className="mb-1"
              value={productoEstado?.cantidad}
              onChange={(event) =>
                setProductoEstado({
                  ...productoEstado,
                  cantidad: event.target.value,
                })
              }
            />
            <Form.Control
              id="sku"
              placeholder="sku"
              type="text"
              className="mb-1"
              value={productoEstado?.sku}
              onChange={(event) =>
                setProductoEstado({
                  ...productoEstado,
                  sku: event.target.value,
                })
              }
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setIsModalEditar(false);
            setProductoEditar(null);
          }}
        >
          Cancelar
        </Button>
        <Button variant="primary" onClick={editarProductoModal}>
          Editar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditar;
