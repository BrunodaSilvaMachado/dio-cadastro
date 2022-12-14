import { Link, useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';


import { Container, Title, Column, TitleForm, SubtitleForm, CriarText, Row, Wrapper } from '../styles';

const schema = yup.object({
    name: yup.string().trim().min(3, 'No minimo 3 caracteres').required('Campo Obrigatório'),
    email: yup.string().email('email não é valido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo Obrigatório'),
    }).required();

const Cadastro = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    control.register("name");
    control.register("email");
    control.register("password");

    const onSubmit = async (formData) => {
        await api.post('/users',{
            name:formData.name,
            email:formData.email,
            password:formData.password
        }).then(response=>{
            if(response.status === 201){
                navigate('/feed');
            }
            else{
                alert(`Email ou senha invalido.\n ${response.message}`);
            }
            
        }).catch(error=>{
            alert(`Houve um erro, tente novamente.\n${error}`);
        });
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e
                     entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper maxWidth={365}>
                <TitleForm>Comece agora grátis</TitleForm>
                <SubtitleForm>Crie sua conta e make the change._</SubtitleForm>
                <form style={{marginTop:35, marginBottom:35}} onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="name"  
                        control={control} errorMsg={errors?.name?.message} autocomplete="username"/>
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  
                        control={control} errorMsg={errors?.email?.message} autocomplete="email"/>
                    <Input type="password" placeholder="Password" leftIcon={<MdLock />}  name="password" 
                        control={control} errorMsg={errors?.password?.message} autocomplete="current-password"/>
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <Column>
                <SubtitleForm>
                    Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                    <Row justifyContent={"flex-start"}>
                        <CriarText color="#FFFFFF">Já tenho conta.</CriarText>
                        <Link to={"/login"}><CriarText color="#23DD7A">Fazer login</CriarText></Link>
                    </Row>
                </SubtitleForm>
                </Column>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }