import firebaseApp from "../firebase/credenciales";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const db = getFirestore();

async function filtrarDatos(stringBusqueda) {
  const documentosFiltrados = [];

  const collectionRef = collection(db, "productos");
  const queryTitulo = query(
    collectionRef,
    where("titulo", "==", stringBusqueda)
  );
  const querySku = query(collectionRef, where("sku", "==", stringBusqueda));

  //buscar y obtener los datos
  const arraySnapshots = await Promise.all([
    getDocs(queryTitulo),
    getDocs(querySku),
  ]);

  arraySnapshots.forEach((snapshot) => {
    snapshot.forEach((doc) => {
      documentosFiltrados.push(doc.data());
    });
  });

  return documentosFiltrados;
}

export default filtrarDatos;
