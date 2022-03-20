import { Modal, Stack, Button, Form } from "react-bootstrap";
import anadirProducto from "../functions/anadirProducto";

function ModalEditar({
  isModalEditar,
  setIsModalEditar,
  actualizarEstadoProductos,
  productoEditar,
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
    actualizarEstadoProductos();
    setIsModalEditar(false);
  }

  return (
    <Modal show={isModalEditar} onHide={() => setIsModalEditar(false)}>
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
              value={productoEditar.titulo}
            />
            <Form.Control
              id="precio"
              placeholder="precio"
              type="number"
              className="mb-1"
              value={productoEditar.precio}
            />
            <Form.Control
              id="cantidad"
              placeholder="cantidad"
              type="number"
              className="mb-1"
              value={productoEditar.cantidad}
            />
            <Form.Control
              id="sku"
              placeholder="sku"
              type="text"
              className="mb-1"
              value={productoEditar.sku}
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsModalEditar(false)}>
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
