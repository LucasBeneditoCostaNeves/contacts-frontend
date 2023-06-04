import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Input } from "../../components/input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services";
import { RegisterStyled } from "./styled";
import img from "../../assets/image 3.png";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório")
    .min(3, "Mínimo 3 caracteres")
    .max(30, "Máximo 30 caracteres"),
  email: yup
    .string()
    .required("Email obrigatório")
    .email("O email inválido")
    .min(6, "Mínimo 6 caracteres")
    .max(100, "Máximo 120 caracteres"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .max(120, "Máximo 120 caracteres")
    .min(6, "Mínimo 6 caracteres"),
  telephone: yup
    .string("Precisa ser um número")
    .required("Telefone obrigatório")
    .min(6, "Minímo 8 caracteres"),
});

export const PageRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });
  const navigate = useNavigate();

  const cadastrar = async (data) => {
    console.log(data);
    const newData = {
      email: data.email,
      password: data.password,
      name: data.name,
      telephone: Number(data.telephone),
    };
    console.log(newData);
    try {
      await api.post("users/", newData);
      toast.success("Usuário Cadastrado com Sucesso");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      if (error.response.status === 409) {
        toast.error("Opa, esse contato já existe!");
      }
    }
  };

  return (
    <RegisterStyled>
      <img src={img} />
      <form onSubmit={handleSubmit(cadastrar)}>
        <h1>Crie uma Conta</h1>
        <h2>Faça seu cadastro agora</h2>
        <Input
          label="Nome"
          type="text"
          placeholder="Coloque seu nome aqui"
          register={register("name")}
          msgerror={errors.name?.message}
        />
        <Input
          label="Email"
          type="text"
          placeholder="Coloque seu email aqui"
          register={register("email")}
          msgerror={errors.email?.message}
        />
        <Input
          label="Senha"
          type="text"
          placeholder="Coloque sua senha aqui"
          register={register("password")}
          msgerror={errors.password?.message}
        />
        <Input
          label="Telefone"
          type="text"
          placeholder="Coloque seu telefone aqui"
          register={register("telephone")}
          msgerror={errors.telephone?.message}
        />
        <button className="button" type="submit">
          Cadastre-se
        </button>
        <Link to="/">Já tem uma conta? Faça login</Link>
      </form>
      <ToastContainer autoClose={1400} />
    </RegisterStyled>
  );
};
