import React from "react";
import Container from "react-bootstrap/Container";

import Home from "./views/Home";
import Login from "./views/Login";

function App() {
  const [usuario, setUsuario] = React.useState(null);

  return <Container fluid>{usuario ? <Home /> : <Login />}</Container>;
}

export default App;
