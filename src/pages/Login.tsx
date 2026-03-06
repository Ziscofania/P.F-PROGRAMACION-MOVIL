import {
IonPage,
IonContent,
IonInput,
IonButton
} from "@ionic/react";

import { useState } from "react";
import { loginUser } from "../services/authService";

const Login: React.FC = () => {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = async () => {

await loginUser(email,password);

};

return(

<IonPage>

<IonContent>

<IonInput
placeholder="Email"
onIonChange={(e)=>setEmail(e.detail.value!)}
/>

<IonInput
type="password"
placeholder="Password"
onIonChange={(e)=>setPassword(e.detail.value!)}
/>

<IonButton expand="block" onClick={handleLogin}>
Login
</IonButton>

</IonContent>

</IonPage>

);

};

export default Login;