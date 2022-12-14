import { Link, useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';


import { Container, Title, Column, TitleForm, SubtitleForm, CriarText, Row, Wrapper } from '../styles';

const schema = yup.object({
    email: yup.string().email('email não é valido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo Obrigatório'),
    }).required();

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors  } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    control.register("email");
    control.register("password");

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);
            if(data.length == 1){
                navigate('/feed');
            }else{
                alert('Email ou senha invalido')
            }

        }catch(e){
            alert('Houve um erro, tente novamente');
        }
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper maxWidth={300}>
                <TitleForm>Faça seu cadastro</TitleForm>
                <SubtitleForm>Faça seu login e make the change._</SubtitleForm>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" control={control} placeholder="E-mail" leftIcon={<MdEmail />}   
                        errorMsg={errors?.email?.message} autocomplete="username"/>
                    <Input name="password" control={control} placeholder="Senha" leftIcon={<MdLock />}   
                         errorMsg={errors?.password?.message} type="password" autocomplete="current-password"/>
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <Row justifyContent={"space-between"}>
                    <CriarText color="#E5E044">Esqueci minha senha</CriarText>
                    <Link to={"/cadastro"}><CriarText color="#23DD7A">Criar Conta</CriarText></Link>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>);
}

export { Login }