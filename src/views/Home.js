import React from "react";
import signOut from "../functions/cerrarSesion";
import { Container, Stack, Button, Form } from "react-bootstrap";

function Home({ usuario }) {
  return (
    <Container fluid>
      <Stack direction="horizontal">
        <p style={{ fontSize: 24 }}>Bienvenido,{usuario.email}</p>
        <Button onClick={signOut}>Cerrar sesion</Button>
      </Stack>
      <hr />
      <Form>
        <Stack></Stack>
      </Form>
    </Container>
  );
}

export default Home;
