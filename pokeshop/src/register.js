import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
const { register, handleSubmit } = useForm();

const onSubmit = data => {
    axios.post('http://localhost:8000/api/register', data)
    .then(response => alert('Registro exitoso'))
    .catch(error => alert('Error en el registro'));
};

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Nombre" />
        <input {...register("email")} placeholder="Email" />
        <input {...register("password")} type="password" placeholder="Contraseña" />
        <button type="submit">Registrarse</button>
    </form>
);
};

export default Register;
