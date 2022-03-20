import { Modal, Stack, Button, Form } from "react-bootstrap";
import anadirProducto from "../functions/anadirProducto";

function ModalAnadir({
  isModalAnadir,
  setIsModalAnadir,
  actualizarEstadoProductos,
}) {
  function anadirProductoModal() {
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
    setIsModalAnadir(false);
  }

  return (
    <Modal show={isModalAnadir} onHide={() => setIsModalAnadir(false)}>
      <Modal.Header>
        <Modal.Title>Anadir producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Control
              id="titulo"
              placeholder="titulo"
              type="text"
              className="mb-1"
            />
            <Form.Control
              id="precio"
              placeholder="precio"
              type="number"
              className="mb-1"
            />
            <Form.Control
              id="cantidad"
              placeholder="cantidad"
              type="number"
              className="mb-1"
            />
            <Form.Control
              id="sku"
              placeholder="sku"
              type="text"
              className="mb-1"
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsModalAnadir(false)}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={anadirProductoModal}>
          Anadir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAnadir;
