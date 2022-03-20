import React from "react";
import Container from "react-bootstrap/Container";

import Home from "./views/Home";
import Login from "./views/Login";

import firebaseApp from "./firebase/credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(firebaseApp);

function App() {
  const [usuario, setUsuario] = React.useState(null);

  //se ejecuta cada en cada cambio de estado
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  return <Container fluid>{usuario ? <Home /> : <Login />}</Container>;
}

export default App;
