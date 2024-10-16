import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
const { register, handleSubmit } = useForm();

const onSubmit = data => {
axios.post('http://localhost:8000/api/login', data)
    .then(response => {
        localStorage.setItem('token', response.data.token);
        alert('Login exitoso');
    })
    .catch(error => alert('Error en el login'));
};

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} placeholder="Email" />
        <input {...register("password")} type="password" placeholder="Contraseña" />
        <button type="submit">Iniciar sesión</button>
    </form>
);
};

export default login;
