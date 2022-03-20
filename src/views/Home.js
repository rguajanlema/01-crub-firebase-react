import React from "react";
import signOut from "../functions/cerrarSesion";

function Home() {
  return (
    <div>
      <button onClick={signOut}>Cerrar sesion</button>
      Bienvenido
    </div>
  );
}

export default Home;
