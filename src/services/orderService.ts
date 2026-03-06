import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const createOrder = async (order:any) => {

await addDoc(collection(db,"orders"),{

...order,
status:"pending"

});

};