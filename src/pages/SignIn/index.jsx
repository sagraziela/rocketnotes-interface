import { Background, Container, Form } from "./styles";
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { FiMail, FiLock } from 'react-icons/fi';

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <section>
                    <InputText type="text" placeholder="E-mail" icon={ FiMail } />
                    <InputText type="password" placeholder="Senha" icon={ FiLock } />
                </section>

                <Button title="Entrar" />

                <div>
                    <ButtonText title="Criar conta" isActive />
                </div>
            </Form>

            <Background />
        </Container>
    )
}