import { Background, Container, Form } from "./styles";
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { FiUser, FiMail, FiLock } from 'react-icons/fi';

export function SignUp() {
    return (
        <Container>
            <Background />
            
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <section>
                    <InputText type="text" placeholder="Nome" icon={ FiUser } />
                    <InputText type="text" placeholder="E-mail" icon={ FiMail } />
                    <InputText type="password" placeholder="Senha" icon={ FiLock } />
                </section>

                <Button title="Cadastrar" />

                <div>
                    <ButtonText title="Voltar para o login" isActive />
                </div>
            </Form>
        </Container>
    )
}