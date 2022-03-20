import { Modal, Stack, Button, Form } from "react-bootstrap";

function ModalAnadir({ isModalAnadir, setIsModalAnadir }) {
  return (
    <Modal show={isModalAnadir} onHide={() => setIsModalAnadir(false)}>
      <Modal.Header>
        <Modal.Title>Anadir producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Control controlId="titulo" placeholder="titulo" type="text" />
            <Form.Control
              controlId="precio"
              placeholder="precio"
              type="number"
            />
            <Form.Control
              controlId="cantidad"
              placeholder="cantidad"
              type="number"
            />
            <Form.Control controlId="sku" placeholder="sku" type="text" />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsModalAnadir(false)}>
          Cancelar
        </Button>
        <Button variant="primary">Anadir</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAnadir;
