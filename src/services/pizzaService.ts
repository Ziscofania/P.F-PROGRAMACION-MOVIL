import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const getPizzas = async () => {

  const querySnapshot = await getDocs(collection(db, "pizzas"));

  const pizzas:any[] = [];

  querySnapshot.forEach((doc) => {
    pizzas.push({
      id: doc.id,
      ...doc.data()
    });
  });

  return pizzas;
};