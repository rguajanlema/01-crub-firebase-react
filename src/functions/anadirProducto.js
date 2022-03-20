import firebaseApp from "../firebase/credenciales";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

function anadirProducto(infoProducto) {
  const collectionRef = collection(db, "productos");
  const docRef = doc(collectionRef, infoProducto.sku);
  setDoc(docRef, infoProducto);
}

export default anadirProducto;
